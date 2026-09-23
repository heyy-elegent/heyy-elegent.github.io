import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2020',
    title: 'Class X (85%)',
    subtitle: 'Satyabhama Vidya Mandir, Raebareli',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2022',
    title: 'Class XII (93%)',
    subtitle: 'Triveni Kashi Inter College, Unnao',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2023',
    title: 'B.Tech CSE (AI & DS)',
    subtitle: 'Poornima University, Jaipur',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Building...',
    subtitle: 'Full Stack & AI/ML \u221A CGPA 8.7',
    position: 'right',
  }
]