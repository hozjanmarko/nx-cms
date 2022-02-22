## MILESTONE 1 GOALS (25-2)

### POC GOALS

simple headless cms system with BE, admin-client and consumer app example

- domain
- dal
- api-shared
- api
- scafolded consumer app
- scafolded admin app

#### TECHNICAL GOALS

- monorepo concepts - using nx
- modular
- sharable interfaces
- sharable components
- hexagonal primitives - ports/adapters, simplified command/query

---

### MODULES STRUCTURE

```
LIBS
	common
		commands

		queries

	shared
		cms-api-shared

	cms-dal tapeorm

	cms-domain

	ui
		article
			card
			list
			view
			editor

	ui-shared
		article
			useArticle
			useArticleListing
```

### APPS AND FEATURES

```
	cms-api

	cms-consumer next
	- articles listing
	- article display

	cms-admin cra
	- listing
	- create
	- edit
```

### DOMAIN MODEL

---

    CmsArticle
    ----------
    id
    title
    slug
    summary
    content/markdown
    published
    accountId : string
    crearedAt
    updatedAt?
    publishedAt?

###DOMAIN SERVICES

```
	CmsArticleService(CmsArticleRepositoryPort)
		latestPublishedArticles(publishedCmsArticlesQuery) : [CmsArticle[],allArticlesCount]
		getPublishedArticleOrThrow(cmsArticleQuery) : CmsArticle
		getAllArticles(cmsArticlesQuery) : [CmsArticle[],allArticlesCount]
		createArticle(createCmsArticleCommand) : CmsArticle
		editArticle(editCmsArticleCommand) : CmsArticle

	Ports
	----------
	CmsArticleRepositoryPort
		getCmsArticleById
		createCmsArticle
		editCmsArticle
		latestPublishedArticles
		getAllArticles
```
