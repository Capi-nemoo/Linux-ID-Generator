document.getElementById('generateBtn').addEventListener('click', function() {
    // Generate random ID
    const id = 'LINUX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    // Generate random username
    const usernames = ['tuxfan', 'rootedpenguin', 'bashmaster', 'sysop', 'distroluv', 'sudoking', 'penguincoder'];
    const username = usernames[Math.floor(Math.random() * usernames.length)];
    // Pick random distro
    const distros = ['Ubuntu', 'Fedora', 'Arch', 'Debian', 'Mint', 'openSUSE', 'Manjaro'];
    const distro = distros[Math.floor(Math.random() * distros.length)];
    // Generate avatar (Dicebear identicon with username)
    const avatarUrl = `https://avatars.dicebear.com/api/identicon/${encodeURIComponent(username)}.svg`;
    // Fill card
    document.getElementById('card-id').textContent = id;
    document.getElementById('card-username').textContent = username;
    document.getElementById('card-distro').textContent = distro;
    document.getElementById('avatar-img').src = avatarUrl;
    // Show card
    document.getElementById('id-card').style.display = 'flex';
});
