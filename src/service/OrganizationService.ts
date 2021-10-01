import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Organization } from "../domain/entities/Organization";
import { OrganizationRepository } from "../domain/repositories/OrganizationRepository";

@Service()
export class OrganizationService {

    private organizationRepository: OrganizationRepository;

    constructor(@InjectRepository() organizationRepository: OrganizationRepository) {
        this.organizationRepository = organizationRepository;
    }

    public findAll(): Promise<Organization[]> {
        return this.organizationRepository.findAll();
    }

    public findByName(name: string): Promise<Organization | undefined> {
        return this.organizationRepository.findByName(name);
    }

    public save(organization: Organization): Promise<Organization> {
        return this.organizationRepository.save(organization);
    }
}