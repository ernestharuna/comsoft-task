const menuData = [
    {
        label: 'Folder 1',
        link: '/folder1', // Optional link for the top-level item
        children: [
            { label: 'File 1.1' },
            { label: 'File 1.2' },
            {
                label: 'Subfolder 1.3',
                children: [
                    { label: 'File 1.3.1' },
                    { label: 'File 1.3.2' },
                ],
            },
        ],
    },
    { label: 'Folder 2', link: '/folder2' },
    // Add more folders and their nested items...
];

export default menuData
