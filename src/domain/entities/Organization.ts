import { Entity, Unique } from "typeorm";

@Entity("users")
@Unique(["name"])
export class Organization {

    name: string;

    description: string;

    country: string;

    email: string;

    phoneNumber: string;

    accountNumber: string;
}