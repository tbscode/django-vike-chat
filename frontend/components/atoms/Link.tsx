import { ROUTE_PREFIX } from "@/renderer/constants";
import { navigate as vikeNavigate } from "vike/client/router";
import { forwardRef } from "react";

export const Link = forwardRef(({ ...props }, innerRef) => {
    let href = props.href;
    if (props.href?.startsWith("/")) {
        href = ROUTE_PREFIX + props.href;
    }
    const children = props.children;
    delete props.href;
    delete props.children;

    return <a ref={innerRef} href={href} {...props}>{children}</a>;
});

export function navigate(href, props = {}) {
    if (href.startsWith("/")) {
        href = ROUTE_PREFIX + href;
    }
    vikeNavigate(href, props);
}

export function navigateSearch(search) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.keys(search).forEach(key => {
        if (search[key] == null) {
            if (key in search) {
                searchParams.delete(key);
            }
            delete search[key];
        } else {
            searchParams.set(key, search[key])
        }
    });
    var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
    vikeNavigate(newRelativePathQuery);
}
