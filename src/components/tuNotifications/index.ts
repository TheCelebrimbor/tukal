import { App, createApp } from "vue";
import tuComponent from "./tuNotifications.vue";

tuComponent.install = (vue: any) => {
	vue.component(tuComponent.name, tuComponent);
};

if (typeof window !== "undefined" && (<any>window).Vue)
	tuComponent.install((<any>window).Vue);

const notificationConstructor = tuComponent;

interface NotificationAttributes {
	position?: "bottom-left"| "bottom-right" | "bottom-center" | "top-left" | "top-right" | "top-center",
	isVisible?: Boolean,
	content?: Object,
	title: String,
	text?: String,
	color?: String,
	border?: String,
	icon?: String,
	onClickClose?: Function,
	onClick?: Function,
	buttonClose?: Boolean,
	flat?: Boolean,
	onDestroy?: Function,
	sticky?: Boolean,
	square?: Boolean,
	width?: String,
	loading?: Boolean,
	progressAuto?: Boolean,
	progress?: Number,
	duration?: Number,
	notPadding?: Object,
	clickClose?: Boolean,
	classNotification?: String
}

class Notification {
	static notifId = 0;
	static instanceList: any;
	clientClose : Function | null = null;
	instance : App | null = null;
	currentId : number = 0;

	public static closeAll (params) {
		for (const id of Notification.instanceList.keys) {
			try {
				Notification.instanceList[id].unmount();
			}
			catch (error) {

			}
		}

		this.instanceList = [];
	};

	close () {
		Notification.instanceList[this.currentId].unmount();
	}

	private closeNotification () {
		Notification.instanceList[this.currentId].unmount();
		if (this.clientClose) this.clientClose();
	}

	constructor (paramsAttr: NotificationAttributes) {
		let params = Object.create({});
		params = Object.assign(params, paramsAttr);
		params.notifId = ++Notification.notifId;
		this.currentId = Notification.notifId;
		params.clickClose = true;
		if (params.onClickClose) this.clientClose = params.onClickClose;
		params.onClickClose = this.closeNotification.bind(this);

		if (params.progress === "auto" && params.duration !== "none") {
			params.progressAuto = true;
			delete params.progress;
		}

		const parent: HTMLElement =
		document.querySelector(`.tu-notification-parent--${params.position || "bottom-right"}`) || document.createElement("div");

		if (!document.querySelector(`.tu-notification-parent--${params.position || "bottom-right"}`)) {
			parent.className = "tu-notification-parent";
			parent.classList.add(`tu-notification-parent--${params.position || "bottom-right"}`);
		}
		this.instance = createApp(notificationConstructor, params);
		const element = document.createElement("div");
		const html = this.instance.mount(element).$el;

		parent.appendChild(html);
		document.body.appendChild(parent);

		if (!!Notification.instanceList === false) Notification.instanceList = Object.create(null);
		Notification.instanceList[Notification.notifId] = this.instance;
	}
};

export { Notification, NotificationAttributes };
