import { Body, JsonController, Post } from "routing-controllers";
import Container, { Service } from "typedi";
import { Organization } from "../domain/entities/Organization";
import { OrganizationService } from "../service/OrganizationService";

@Service()
@JsonController("/organizations")
export class OrganizationController {

    private organizationService: OrganizationService;

    constructor() {
        this.organizationService = Container.get(OrganizationService);
    }

    @Post("/register")
    public async register(@Body() organization: Organization): Promise<Organization> {
        return await this.organizationService.save(organization);
    }


}