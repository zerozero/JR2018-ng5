import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  constructor() {}


  getProjects() { return Observable.of(PROJECTS); }

  getProject(id: number | string) {
    return this.getProjects()
    // (+) before `id` turns the string into a number
      .map(projects => projects.find(project => project.id === +id));
  }

}

export class Project {
  constructor(
    public id: number,
    public name: string,
    public date: string,
    public client: string,
    public endClient: string,
    public description: string,
    public platform: string,
    public role: string,
    public imageUrl: string
  ) {}

}

const PROJECTS = [
  new Project(
    1,
    'AT&T FirstNet VR',
    '2018',
    'George P Johnson',
    'AT&T',
    'Experiential introduction to services for First Responders',
    'Rift',
    'Lead Developer',
    '../assets/images/attfirstnet-optimize.gif'
  ),
  new Project(
    2,
    'IBM GTS VR',
    '2017',
    'George P Johnson',
    'IBM',
    'Experiential Presentation',
    'Rift',
    'Lead Developer',
    '../assets/images/attfirstnet-optimize.gif'
  ),
  new Project(
    3,
    'Siemens Holobridge',
    '2017',
    'Masters of Pie',
    'Siemens',
    'Prototype CAD in VR application',
    'Rift',
    'Lead Developer',
    '../assets/images/attfirstnet-optimize.gif'
  ),
  new Project(
    4,
    'Darzalex VR',
    '2016',
    'Masters of Pie',
    'Janssen Pharmaceuticals',
    'Healthcare Training Simulation',
    'Rift',
    'Lead Developer',
    '../assets/images/attfirstnet-optimize.gif'
  ),
  new Project(
    5,
    'Coolroom 3D',
    '2003',
    'Ether Interactive',
    'BT/Universal Pictures',
    'Virtual Home and Media Centre',
    'Web',
    'Lead Developer',
    '../assets/images/attfirstnet-optimize.gif'
  )
  ,
  new Project(
    6,
    'The Icarus Project',
    '1994',
    'Duncan of Jordanstone College',
    'Post-Graduate Diploma in Electronic Imaging',
    '',
    'Prototype HMD',
    'Project Lead',
    '../assets/images/attfirstnet-optimize.gif'
  )
  ,
  new Project(
    7,
    'Project Archive',
    '1994-2018',
    'Various',
    'Everywhere',
    '',
    '',
    '',
    '../assets/images/attfirstnet-optimize.gif'
  )


];
