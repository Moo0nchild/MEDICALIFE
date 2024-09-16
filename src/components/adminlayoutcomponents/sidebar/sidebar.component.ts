import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { CheckactionsService } from '../../../../app/services/checkactions/checkactions.service';
import { TranslateService } from '@ngx-translate/core';
import { PermissionsService } from '../../../../app/services/permissions/permissions.service';
import { timer, interval, of } from 'rxjs';
import { takeUntil, mergeMap, delay } from 'rxjs/operators';
import { UserDemographicService } from '../../../../app/services/user-data/userDemographic.service';
import { AlertComponent } from '../../../../app/components/alert/alert/alert.component';
import { AlertService } from '../../../../app/services/alert/alert.service';
import { DatosUsuario, MenuItems, Subroute, User } from '../../../../app/interfaces/adminlayoutcomponents/sidebar/sidebar';
import { UserInfoSharedService } from '../../../../app/services/userInfoShared/userIInfoShared.service';
import { urlJarvisBase, urlKosmos, urlChatKonectados } from "../../../config/globals";
import { Router } from '@angular/router';

declare const $: Function;
const jarvis_url =  urlJarvisBase + 'jarvis/';

declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	typeIcon: string;
	class: string;
	subroutes: Subroute[];
	viewsubroutes: boolean;
	permision: string | string[];
	external_url?: string;
	letra?: string;
}


export const ROUTES: RouteInfo[] = [
    {
        path: '/home',
		title: $localize`Inicio`,
		typeIcon: 'fa',
		icon: 'fa fa-home',
		class: '',
		viewsubroutes: false,
		subroutes: [],
		permision: ''
	},
	{
        path: '/profile/profile',
		title: $localize`Perfil`,
		typeIcon: 'fa',
		icon: 'fa fa-user',
		class: '',
		viewsubroutes: false,
		subroutes: [],
		permision: ''
	},
	{
        path: '/fondokonecta/inicio',
		title: $localize`Fondo Konecta`,
		typeIcon: 'fa',
		icon: 'fa fa-piggy-bank',
		class: '',
		viewsubroutes: false,
		subroutes: [],
		permision: ['5201','5202']
	},
	{
        path: '/documents/list',
		external_url: `${urlJarvisBase}jarvis/documents/list`,
		title: $localize`Gestor Documental SIG`,
		typeIcon: 'fa',
		icon: 'fa fa-folder',
		class: '',
		viewsubroutes: false,
		subroutes: [],
		permision: ['805']
	},
    {
        path: '/rocketchat/managment',
		title: $localize`Rocketchat`,
		typeIcon: 'fa',
		icon: 'fa fa-comment-dots',
		class: '',
		viewsubroutes: false,
		subroutes: [],
		permision: ['460']
	},

	{
        path: '/',
		external_url: `${urlChatKonectados}`,
		title: 'Chat Konectados',
		typeIcon: 'fa',
		icon: 'fa fa-comment-dots',
		class: '',
		viewsubroutes: false,
		subroutes: [],
		permision: ['804']
	},

	{
		path: '/',
		title:$localize`Centro de Exportes`,
		typeIcon: 'fa',
		icon: 'fas fa-user-friends',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/exportes/home',
				letra: 'E',
				title: $localize`Exportes`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['5195']
			}
		],
		permision: ['5195']
	},

	{
		path: '/',
		title: $localize`Administrador`,
		typeIcon: 'fa',
		icon: 'fas fa-user-cog',
		class: '',
		viewsubroutes: false,
		subroutes: [
			
			{
				path: '/modelo-operativo/notifications',
				letra: 'AN',
				title: $localize`Alertas y Notificaciones`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['815','816','817','818']
			},
			{
				path: '/administracion/permisos-administracion',
				letra: 'P',
				title: $localize`Permisos`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['300','301','713','831','832']
			},
			{
				path: '/admin/cargaInsumos',
				letra: 'CI',
				external_url: `${jarvis_url}admin/cargaInsumos`,
				title: $localize`Carga De Insumos`,
				typeIcon: 'fa',
				icon: 'fas fa-upload',
				class: '',
				permision: ['632','633']
			},
			{
				path: '/administracion/administrador-centros-costos-pcrc',
				letra: 'CP',
				title: 'CECO / PCRC',
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['315', '316', '333', '341', '677', '678', '679', '680', '681', '682', '683', '685']
			},
			{
				path: '/administracion/encriptar-datos',
				letra: 'E',
				title: $localize`Encriptar datos`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['739']
			},
			{
				path: '/administracion/usuarios',
				letra: 'U',
				title: $localize`Usuarios`,
				typeIcon: 'fa',
				icon: 'fas fa-user',
				class: '',
				permision: ['100']
			}
		],
		permision: ['300','301','315','316','333','341','632','633','713','739','815','816','817','818']
	},

	{
		path: '/',
		title:$localize`Modelo Operativo`,
		typeIcon: 'fa',
		icon: 'fas fa-user-friends',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/modelo-operativo/user',
				letra: 'T',
				title: $localize`Teo`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['756']
			},
			{
				path: '/modelo-operativo/indicadores-proceso',
				letra: 'I',
				title: $localize`Indicadores`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['727']
			},
			{
				path: '/modelo-operativo/personal-distribution-home',
				letra: 'DP',
				title: $localize`Distribución de personal`,
				typeIcon: 'fa',
				icon: 'fas fa-user',
				class: '',
				permision: ['463','464','467','468','515','516','547','548']
			},
			{
				path: '/modelo-operativo/metricas',
				letra: 'MG',
				title: $localize`Mi gestión`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['651']
			},
			{
				path: '/modelo-operativo/configuracion',
				letra: 'P',
				title: $localize`Planes de acción`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['649']
			},
			{
				path: '/modelo-operativo/contratacion-metas',
				letra: 'CM',
				title: $localize`Contratacion Metas`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['811']
			},
			{
				path: '/modelo-operativo/administracion-usuarios',
				letra: 'U',
				title: $localize`Usuarios`,
				typeIcon: 'fa',
				icon: 'fas fa-user',
				class: '',
				permision: ['310','572','595','596']
			}
		],
		permision: ['463','464','467','468','515','516','547','548','651','649','811', '310','572','595','596', '727', '756']
	},
	{
		path: '/reporting',
		title: 'Reporting',
		typeIcon: 'fa',
		icon: 'fa fa-chart-area',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/dashboard/administration',
				letra: 'A',
				title: $localize`Administracion`,
				typeIcon: 'fa',
				icon: 'fa fa-cogs',
				class: '',
				permision: ['531','521','522','523','571','483','448','487']
			},
			{
				path: "/dashboard/communications",
				letra: "C",
				title: $localize`Comunicados`,
				typeIcon: "fa",
				icon: "fas fa-satelite-dish",
				class: "",
				permision: ["5215"],
			},
			{
				path: '/dashboard/dashboard-general',
				letra: 'D',
				title: 'Dashboard',
				typeIcon: 'fa',
				icon: 'fa fa-chart-bar',
				class: '',
				permision: ['447','520']
			},
			{
				path: '*',
				external_url: urlKosmos,
				letra: 'K',
				title: 'Kosmos',
				target: "_blank",
				typeIcon: 'fa',
				icon: 'fa fa-cogs',
				class: '',
				permision: ['531','521','522','523','571','483','448','487']
			},
			{
				path: "/dashboard/reporting-automation",
				letra: "M",
				title: $localize`Módulo de Carga`,
				typeIcon: "fa",
				icon: "fas fa-satelite-dish",
				class: "",
				permision: ['812','813']
			},{
				path: "/dashboard/pulse",
				letra: "P",
				title: "Pulse",
				typeIcon: "fa",
				icon: "fas fa-satelite-dish",
				class: "",
				permision: ['5219']
			},
			{
				path: "/dashboard/isysreportes",
				letra: "I",
				title: "Svg",
				typeIcon: "fa",
				icon: "fas fa-satelite-dish",
				class: "",
				permision: ["808"],},			
		],
		permision: ['447','520','531','521','522','523','571','483','448','487','808','812','813','5219']
	},

	{
		path: '/',
		title: 'WFM',
		typeIcon: 'fa',
		icon: 'fas fa-cog',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/workforce/novelty-home',
				letra: 'N',
				title: $localize`Novedades`,
				typeIcon: 'fa',
				icon: 'fas fa-user',
				class: '',
				permision: ''
			},
			{
				path: '/workforce/forecast-home',
				letra: 'F',
				title: 'Forecast',
				typeIcon: 'fa',
				icon: 'fas fa-user',
				class: '',
				permision: ['754', '757']
			},
			{
				path: '/wfm/pricing',
				letra: 'P',
				external_url: `${jarvis_url}wfm/pricing`,
				title: 'Pricing',
				typeIcon: 'fa',
				icon: 'fas fa-shopping-cart',
				class: '',
				permision: '452'
			},	
			{
				path: '/wfm/configuracion',
				letra: 'C',
				external_url: `${jarvis_url}wfm/configuracion`,
				title: $localize`Configuración`,
				typeIcon: 'fa',
				icon: 'fas fa-wrench',
				class: '',
				permision: '305'
			},
			{
				path: '/workforce/forecast-home-transactions',
				letra: 'P',
				title: $localize`pronosticos`,
				typeIcon: 'fa',
				icon: 'fas fa-shopping-cart',
				class: '',
				permision: ['774','775','776','777','778']
			},
			{
				path: '/turnos/asesor',
				letra: 'T',
				title: $localize`Turnos`,
				typeIcon: 'fa',
				icon: 'far fa-calendar',
				class: '',
				permision: ['641','645','646','652','653','654','304','334','322','320','323','373']
			},
			{
				path: '/workforce/dimensionamiento',
				letra: 'D',
				title: $localize`Dimensionamientos`,
				typeIcon: 'fa',
				icon: 'far fa-calendar',
				class: '',
				permision: ['641','645','646','652','653','654']
			},
			{
				path: '/wfm/bitacora',
				external_url: `${urlJarvisBase}jarvis/wfm/bitacora`,
				letra: 'D',
				title: $localize`Bitacora`,
				typeIcon: 'fa',
				icon: 'far fa-calendar',
				class: '',
				permision: ''
			},
		],
		permision: ''
	},

	{
		path: '/',
		title: 'GTR',
		typeIcon: 'fa',
		icon: 'fa fa-heartbeat',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/gtr/administration',
				letra: 'MO',
				title: $localize`Monitoreo`,
				typeIcon: 'fa',
				icon: 'fa fa-wave-group',
				class: '',
				permision: ['669','670','671','699']
			},
			{
				path: '/gtr/maps',
				letra: 'MA',
				title: $localize`Mapas`,
				typeIcon: 'fa',
				icon: 'far fa-building',
				class: '',
				permision: ['601', '602', '819', '820', '821', '1100', '1101', '5193', '5208']
			},
			{
				path: '/administracion/comunicaciones',
				letra: 'CO',
				title: $localize`Comunicaciones`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['720','721','743']
			},
			{
				path: '/gtr/solicitudes-dinamicas',
				letra: 'SI',
				title: $localize`Solicitudes dinámicas`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['833']
			},
		],
		permision: ['669','670','671','720','721','743','819','820', '821', '833', '601', '602', '1100', '1101', '5193', '5208']
	},
	{
		path: '/',
		title: 'MC',
		typeIcon: 'fa',
		icon: 'fa fa-chart-bar',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/mc/margen-comercial',
				letra: 'MC',
				title: $localize`Margen Comercial`,
				typeIcon: 'fa',
				icon: 'fas fa-user-friends',
				class: '',
				permision: ['766','767','768','769','770','771','772','773','779']
			}
		],
		permision: ['307','308','360','361','362','363','766','767','768','769','770','771','772','773','779']
	},

	{
		path: '/',
		title: $localize`Maestro`,
		typeIcon: 'fa',
		icon: 'far fa-calendar',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/mdp/vacaciones',
				letra: 'V',
				external_url: `${jarvis_url}mdp/vacaciones`,
				title: $localize`Vacaciones`,
				typeIcon: 'fa',
				icon: 'fas fa-bed',
				class: '',
				permision: '372'
			},
			{
				path: '/mdp/activos',
				letra: 'A',
				external_url: `${jarvis_url}mdp/activos`,
				title: $localize`Reportes Encuestas`,
				typeIcon: 'fa',
				icon: 'fas fa-clipboard-list',
				class: '',
				permision: '313'
			}
		],
		permision: ['372','313']
	},

	{
		path: '/',
		title: $localize`Nómina`,
		typeIcon: 'fa',
		icon: 'fas fa-dollar-sign',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/nomina/administrador',
				letra: 'A',
				external_url: `${jarvis_url}nomina/administrador`,
				title: $localize`Administrador`,
				typeIcon: 'mat',
				icon: 'vpn_key',
				class: '',
				permision: '327'
			},
			{
				path: '/nomina/dashboard',
				letra: 'D',
				external_url: `${jarvis_url}nomina/dashboard`,
				title: 'Dashboard',
				typeIcon: 'fa',
				icon: 'fas fa-layer-group',
				class: '',
				permision: '328'
			},
			{
				path: '/nomina/exportoper',
				letra: 'E',
				external_url: `${jarvis_url}nomina/exportoper`,
				title: 'Export Operación',
				typeIcon: 'fa',
				icon: 'fas fa-toolbox',
				class: '',
				permision: '329'
			},
			{
				path: '/nomina/recargo',
				letra: 'R',
				external_url: `${jarvis_url}nomina/recargo`,
				title: $localize`Recargos Administrativos`,
				typeIcon: 'fa',
				icon: 'far fa-clock',
				class: '',
				permision: '550'
			},
			{
				path: `/nomina/simulador-turnos`,
				letra: 'P',
				title: $localize`Pre-nómina` ,
				typeIcon: 'fa',
				icon: 'far fa-calendar',
				class: '',
				permision: '' 
			},
			{
				path: '/nomina/import',
				letra: 'I',
				title: $localize`Importar Nómina`,
				typeIcon: 'fa',
				icon: 'far fa-clock',
				class: '',
				permision: '668'
			},
			{
				path: '/nomina/auxiliares',
				letra: 'A',
				title: $localize`Auxiliares`,
				typeIcon: 'fa',
				icon: 'far fa-clock',
				class: '',
				permision: '1531'
			}
		],
		permision: ['327','328','329','550','790','668','1531']
	},

	{
		path: '/',
		title: $localize`Gestión Humana`,
		typeIcon: 'fa',
		icon: 'fas fa-tag',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/gestionHumana/activos',
				letra: 'A',
				external_url: `${jarvis_url}gestionHumana/activos`,
				title: $localize`Activos`,
				typeIcon: 'fa',
				icon: 'fas fa-artstation',
				class: '',
				permision: '343'
			},
			{
				path: '/gestion-humana/cargos',
				letra: 'C',
				title: $localize`Cargos`,
				typeIcon: 'fa',
				icon: 'fas fa-users',
				class: '',
				permision: ['312']
			},
			{
				path: '/gestionHumana/kbuild',
				letra: 'BT',
				external_url: `${jarvis_url}gestionHumana/kbuild`,
				title: $localize`Bolsa De Talentos`,
				typeIcon: 'fa',
				icon: 'fas fa-user-check',
				class: '',
				permision: ['642','661','662','663','664']
			},
			{
				path: '/gestionHumana/sanciones',
				letra: 'S',
				external_url: `${jarvis_url}gestionHumana/sanciones`,
				title: $localize`Sanciones`,
				typeIcon: 'fa',
				icon: 'fas fa-user-times',
				class: '',
				permision: '346'
			},
			{
				path: '/gestion-humana/satelite',
				letra: 'S',
				title: $localize`Satelite`,
				typeIcon: 'fa',
				icon: 'fas fa-satellite',
				class: '',
				permision: '648'
			},			
			// {
			// 	path: '/gestionHumana/seleccion',
			// 	letra: 'S',
			// 	external_url: `${jarvis_url}gestionHumana/seleccion`,
			// 	title: 'Selección-deshabilitado',
			// 	typeIcon: 'fa',
			// 	icon: 'fas fa-tasks',
			// 	class: '',
			// 	permision: '131313'
			// },
			{
				path: '/gestion-humana/seleccion',
				letra: 'S',
				title: $localize`Selección`,
				typeIcon: 'fa',
				icon: 'fas fa-tasks',
				class: '',
				permision: ['388','5172','674','1532','342']
			},
			{
				path: '/gestionHumana/sst',
				letra: 'S',
				external_url: `${jarvis_url}gestionHumana/sst`,
				title: 'SST',
				typeIcon: 'fa',
				icon: 'fas fa-shield-alt',
				class: '',
				permision: '347'
			},
			{
				path: '/modelo-operativo/disciplinary-processes',
				letra: 'PD',
				title: $localize`Procesos Disciplinarios`,
				typeIcon: 'fa',
				icon: 'fas fa-user',
				class: '',
				permision: '689'
			},
			{
				path: '/gestion-humana/salary-estructure',
				letra: 'E',
				title: $localize`Estructura Salarial`,
				typeIcon: 'fa',
				icon: 'far fa-clock',
				class: '',
				permision: '703'
			},			
			{
				path: '/gestion-humana/bank-data',
				letra: 'BD',
				title: $localize`Datos Bancarios`,
				typeIcon: 'fa',
				icon: 'far fa-building-columns',
				class: '',
				permision: '741'
			},
			{
				path: '/gestion-humana/zentir-emociones',
				letra: 'ZE',
				title: $localize`Zentir`,
				typeIcon: 'fa',
				icon: 'far fa-building-columns',
				class: '',
				permision: '839'
			}				
		],
		permision: ['311','342','343','344','346','347','388','642','648','661','662','663','664','665', '674', '675','689','690','694','703','741', '839', '1532', '312', '5172']
	},

	{
		path: '/aci/retiros',
		title: 'ACI',
		typeIcon: 'fa',
		icon: 'fas fa-user-friends',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/aci/retiros',
				letra: 'R',
				title: $localize`Retiros`,
				typeIcon: 'fa',
				icon: 'fas fa-clipboard-check',
				class: '',
				permision: ['393','394','395','493']
			},
			{
				path: '/meta-cuatro/retiro-manual',
				letra: 'RM',
				title: $localize`Retiros Manuales`,
				typeIcon: 'fa',
				icon: 'far fa-building-columns',
				class: '',
				permision: ['100']
			}
		],
		permision: ['393','394','395','493']
	},

	{
		path: '/',
		title: 'Meta4',
		typeIcon: 'fa',
		icon: 'fas fa-puzzle-piece',
		class: '',
		viewsubroutes: false,
		subroutes: [
			{
				path: '/meta4/panelControl',
				letra: 'P',
				external_url: `${jarvis_url}meta4/panelControl`,
				title: $localize`Panel De Control`,
				typeIcon: 'fa',
				icon: 'fas fa-edit',
				class: '',
				permision: '587'
			},
			{
				path: '/meta-cuatro/panel-control',
				letra: 'NP',
				title: $localize`Nuevo Panel`,
				typeIcon: 'fa',
				icon: 'far fa-building-columns',
				class: '',
				permision: ['100']
			},
			{
				path: '/meta-cuatro/cargas-masivas',
				letra: 'CM',
				title: $localize`Cargas masivas`,
				typeIcon: 'fa',
				icon: 'far fa-building-columns',
				class: '',
				permision: ['1552']
			}
		],
		permision: ['586', '1552']
	},
	
];

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	public param = { value: 'world' };
	public menuItems: MenuItems[];
	public delay: number = 3000;
	public showClass: boolean = false;
	public viewSubmodule: boolean = false;
	public showItem: boolean = false;
	public user: User;
	public userInfo = {} as DatosUsuario;
	public showUpdatePersonalData: boolean = true;
	public updateDatesRealized:boolean = true;
	@Input('setSidebarData') setSidebarData = new EventEmitter();

	constructor(
		public checkactions: CheckactionsService,
		public readonly translate: TranslateService,
		private readonly alertService : AlertService,
		public permission: PermissionsService,
		public demographic: UserDemographicService, 
		public readonly userShared:UserInfoSharedService,
		private router: Router

	) {}

	private readonly onEnterStream: EventEmitter<Event> = new EventEmitter();
	private readonly onLeaveStream: EventEmitter<Event> = new EventEmitter();

	ngOnInit() {
		this.setCompleteUserInfo();
		this.getShowUpdatePersonalData();
	}

	private getShowUpdatePersonalData(): void{
		this.demographic.getShowUpdatePersonalData().then(data => {
			this.showUpdatePersonalData =  data.result == 1;
		}).catch(error=> 
			this.alertService.showAlert('Aviso', AlertComponent, error.statusText, 'error')
		);
	}

	private async setCompleteUserInfo(): Promise<void> {
        this.userInfo = await this.getCompleteUserInfo();
		this.menuItems = ROUTES;

		this.setSidebarData.subscribe((data) => {
			this.ngOnInit();
			this.menuItems = [];
			this.menuItems = ROUTES;
		});

		this.onEnterStream
			.pipe(
				mergeMap((e) => {
					interval(5000 /* ms */);
					return of(e);
				}),
				delay(5000),
				takeUntil(this.onLeaveStream)
			)
			.subscribe((e) => {
				this.showClass = true;
				interval(5000 /* ms */);
			});

		this.onLeaveStream.subscribe((e) => {
			this.showClass = false;
		});

		//no ha realizado encuesta
		if(this.updateDatesRealized == false){
			this.router.navigate(['/profile/actualizar-datos']);
		}
    }

    public async getCompleteUserInfo(): Promise<DatosUsuario> {	
		return new Promise<DatosUsuario>(resolve => {	
			this.demographic.getDataSidebarUser()
			.then(async data => {
				if(data.result.necessary_actions.data_update === false){
					this.updateDatesRealized = false;
				}
				this.userShared.setNewUser(data.result["userStorage"]);
				this.user =  this.userShared.getUser();
				resolve(data.result["userBasicInfo"]);
			})
			.catch(error=> this.alertService.showAlert('Aviso', AlertComponent, error.statusText, 'error'))
		});
    }

	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	}
	/**
	 * cambia si esta activa o no un item del sidebar
	 * @param value
	 * @param i
	 */
	itemActive(value, i) {
		this.menuItems.forEach((element) => {
			element.viewsubroutes = false;
		});
		this.menuItems[i].viewsubroutes = !value;
	}

	cleanItemActive() {
		this.viewSubmodule = false;
	}
	/**
	 * MMetodo para validar los permisos en el menu
	 * @param value
	 */
	validateMenu(value) {
		return this.validateActionMenu(value)
	}

	validateItem(value) {
		return this.validateActionMenu(value)
	}

	validateActionMenu(value) {
		if (
			this.permission.validateAction(value.permision)
			|| this.permission.validateAction('438') || value.permision == ''
		) {
			return true;
		}
	}

	public checkcondenseMenu() {
		const elementmainpanel = document.getElementById('main-panel');

		return document.getElementById('sidebar') &&
		elementmainpanel.classList.contains('mainexpanded');
	}

	condenseMenu() {
		const elementsidebar = document.getElementById('sidebar');
		const elementmainpanel = document.getElementById('main-panel');
		const elementlogo =
			document.getElementById('sidebar') &&
			elementmainpanel.classList.contains('mainexpanded');

		if (elementlogo) {
			elementsidebar.classList.remove('sidebarcondesed');
			elementmainpanel.classList.remove('mainexpanded');
		} 
		
		if (!elementlogo && elementsidebar !== null && elementmainpanel !== null) {
			elementsidebar.classList.add('sidebarcondesed');
			elementmainpanel.classList.add('mainexpanded');
		}
		return elementlogo;
	}
	onEnter(e: Event) {
		this.onEnterStream.emit(e);
		const show = this.checkcondenseMenu();
		if (!this.showClass && show) {
			const numbers = timer(200);
			const num = timer(500);
			num.subscribe((x) => x);
			numbers.subscribe((x) => this.condenseMenu());
		}
		if (this.showClass && show) {
			const numbers = timer(200);
			const num = timer(500);
			num.subscribe((x) => x);
			numbers.subscribe((x) => this.condenseMenu());
		}

	}

	onLeave(e: Event) {
		const show = this.checkcondenseMenu();
		this.onLeaveStream.emit(e);
		if (!this.showClass && !show) {
			const num = timer(200);
			num.subscribe((x) => x);
			const numbers = timer(500);
			numbers.subscribe((x) => this.condenseMenu());
			this.showClass = true
		}
	}
}
