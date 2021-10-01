import { Service } from "typedi";
import { EntityRepository, Repository } from "typeorm";
import { Organization } from "../entities/Organization";

@Service()
@EntityRepository(Organization)
export class OrganizationRepository extends Repository<Organization> {

    public findAll() {
        return this.find({});
    }

    public findByName(name: string) {
        return this.findOne({ where: { name: name } });
    }
}