import { Entity } from "typeorm";

@Entity("campaign")
export class Campaign {

    title: string;

    description: string;

    targetAmount: number;

    collectedAmount:number;

    endDate: string;

    organizationId: number;

}