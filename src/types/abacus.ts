export type BeadColor = 'blue' | 'orange';

export type SkinColor = 'light' | 'dark';

export type TopBeadPosition = 'top' | 'bottom';

export type BeadsRecords = [number, number];

export type AbacusRowRecords = { topBead: boolean; beads: BeadsRecords }[];
