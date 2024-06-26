> 📢 Announcement 📢: Hey everybody we just release the first modularized version of our django apps
> - 'core' module: https://pypi.org/project/oc-chat-django/
> - 'chat' module: https://pypi.org/project/oc-core-django/
>
> We have also published a package for the chats python client:
> - https://pypi.org/project/open-chat-api-client/
> And we are working hard to have the first AGENT-RAG demo online very soon! 🚀

# Open Chat

>  aka `tims-stack-v5` :warning: This repo is a work in progress!

Initiated by [@tbscode](https://github.com/tbscode/)
Contributions are welcome, please open PR's and issues at any time!

Contributors:
- @tbscode
- @JannisToelle
- @fruecker89

## TL;DR

```bash
docker compose up --build
```

## Documentation & Preview

> You can log in with `test+msgmate2@msgmate.io` any number between 1-20, and the password `Test123!`.
> Log in with two users and send some messages! The staging server is reset on every package update...

- [The staging chat server](https://staging-open-chat.msgmate.io/)
- [The documentation](https://staging-open-chat.msgmate.io/docs)
- [The API](https://staging-open-chat.msgmate.io/api/schema/redoc/)

## Related Software

- [the python api client package](https://github.com/tbscode/open-chat-api-client/)
- [the new hal9003 bot]()

### About

This project was initiated and built by @tbscode, with the intention of becoming an open, self-hostable AI chat interface. It offers several Django packages that can be integrated into a Django app for chat and user management features.

The app and interface will also provide a way to integrate with AI-bots/agents or other applications. You will be able to either run the Chat locally and [run the included bots](todo) with some API keys, or you can self-host models with them using means like [`localai.io`](https://localai.io) and connect them using Bots or Agents. Alternatively, you can enter AI-Chat service API keys to your bots or use the bots and interfaces of services such as [`msgmate.io`](https://msgmate.io).

There is copyrighted static content present in this repo at: `./frontend/assets`. This includes, for example, the msgmate.io logo, other external logos ( `./frontend/assets/_external_logos` ) and other landing page assets (please replace/delete them if you intend to publish/fork).

There is also a fork/port of [shadcn-landing-page](https://github.com/leoMirandaa/shadcn-landing-page/tree/main) included at `./frontend/components/landing_page`.

The rest of the repo is licensed under MIT: [Check LICENSE.md](./LICENSE.md)
