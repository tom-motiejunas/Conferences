export default function checkAuth(): boolean {
    return !!localStorage.getItem('auth');
}

