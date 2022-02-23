import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1645603047094 implements MigrationInterface {
    name = 'initial1645603047094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" uuid NOT NULL, "title" character varying NOT NULL, "slug" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "publishedAt" TIMESTAMP WITH TIME ZONE DEFAULT now(), "published" boolean NOT NULL, "accountId" character varying NOT NULL, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}
