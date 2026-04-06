import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import routes from '../routesConfig'

const PageTitle = () => {
    const location = useLocation()

    useEffect(() => {
        const currentRoute = routes.find(route => {
            if (route.end)
                return location.pathname === '/'
            return location.pathname === `/${route.path}`
        });

        document.title = currentRoute?.title || 'Blackbird Biimadiziwin Consulting'
    }, [location])

    return null
}

export default PageTitle