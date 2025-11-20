// 渲染个人信息
function renderProfile(data) {
    const profile = data.profile;
    const profileSection = document.querySelector('.profile-section');
    
    if (!profileSection) return;
    
    const profileText = profileSection.querySelector('.profile-text');
    if (profileText) {
        // 渲染姓名
        const nameEl = profileText.querySelector('name');
        if (nameEl) nameEl.textContent = profile.name;
        
        // 渲染简介
        const bioParagraphs = profileText.querySelectorAll('.profile-text-content');
        profile.bio.forEach((text, index) => {
            if (bioParagraphs[index]) {
                // 处理链接（如Prof. Rongrong Ji）
                let html = text;
                if (text.includes('Prof. Rongrong Ji')) {
                    html = text.replace('Prof. Rongrong Ji', 
                        `<a href="${profile.advisor.url}">Prof. Rongrong Ji</a>`);
                }
                bioParagraphs[index].innerHTML = html;
            }
        });
        
        // 渲染联系方式
        const contactLinks = profileText.querySelector('.contact-links');
        if (contactLinks) {
            contactLinks.innerHTML = profile.contacts.map((contact, index) => {
                const separator = index < profile.contacts.length - 1 ? ' &nbsp/&nbsp ' : '';
                return `<a href="${contact.url}">${contact.label}</a>${separator}`;
            }).join('');
        }
    }
    
    // 渲染头像
    const profileImage = profileSection.querySelector('.profile-image');
    if (profileImage) {
        profileImage.innerHTML = `
            <a href="${profile.image.link}">
                <img alt="${profile.image.alt}" src="${profile.image.src}" class="hoverZoomLink">
            </a>
        `;
    }
}

// 渲染新闻列表
function renderNews(news) {
    const newsList = document.querySelector('.news-list');
    if (!newsList) return;
    
    newsList.innerHTML = news.map(item => {
        return `
            <li>
                <p>${item.date} – ${item.content}</p>
            </li>
        `;
    }).join('');
}

// 渲染论文列表
function renderPublications(publications, isPreprint = false) {
    const tableId = isPreprint ? 'preprintList' : 'pubList';
    const table = document.getElementById(tableId);
    
    if (!table) {
        console.error(`Table with id "${tableId}" not found`);
        return;
    }
    
    // 渲染论文
    const rows = publications.map(pub => {
        const linksHtml = pub.links.map(link => {
            if (link.note) {
                return `[<a href="${link.url}" style="color: #EE7F2D;">${link.label}</a>] (${link.note})`;
            } else {
                return `[<a href="${link.url}" style="color: #EE7F2D;">${link.label}</a>]`;
            }
        }).join(' ');
        
        const firstLink = pub.links[0]?.url || '#';
        
        return `
            <tr>
                <td class="publication-image">
                    <img src="${pub.image}">
                </td>
                <td class="publication-content">
                    <a href="${firstLink}">
                        <papertitle><b>${pub.title}</b></papertitle>
                    </a><br>
                    ${pub.authors}<br>
                    <em>${pub.venue}</em>, ${pub.year}<br>
                    ${linksHtml}
                </td>
            </tr>
        `;
    }).join('');
    
    table.innerHTML = rows;
}

// 渲染奖项列表
function renderAwards(awards) {
    const awardsList = document.querySelector('.awards-list');
    if (!awardsList) return;
    
    awardsList.innerHTML = awards.map(award => {
        const noteHtml = award.note ? ` <em>${award.note}</em>` : '';
        return `
            <li>
                <p><b>${award.rank}</b>, ${award.title}${noteHtml}</p>
            </li>
        `;
    }).join('');
}

// 渲染专业活动
function renderActivities(activities) {
    const activitiesList = document.querySelector('.activities-list');
    if (!activitiesList) return;
    
    const conferences = activities.conferences.join('、');
    const journals = activities.journals.join('、');
    
    activitiesList.innerHTML = `
        <li>
            <p>Conference Reviewer: ${conferences}</p>
        </li>
        <li>
            <p>Journal Reviewer: ${journals}</p>
        </li>
    `;
}

// 渲染开源项目
function renderOpensource(opensource) {
    const opensourceLists = document.querySelectorAll('.activities-list');
    if (opensourceLists.length < 2) return;
    
    const opensourceList = opensourceLists[1]; // 第二个activities-list是开源项目
    opensourceList.innerHTML = opensource.map(item => {
        return `
            <li>
                <p><a href="${item.url}">${item.text}</a></p>
            </li>
        `;
    }).join('');
}

// 更新页面标题
function updatePageTitle(name) {
    document.title = name;
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
        metaAuthor.setAttribute('content', name.split(' (')[0]);
    }
}

// 主函数：加载并渲染所有数据
async function loadAndRender() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Failed to load data.json');
        }
        
        const data = await response.json();
        
        // 更新页面标题
        updatePageTitle(data.profile.name);
        
        // 渲染各个部分
        renderProfile(data);
        renderNews(data.news);
        renderPublications(data.publications.papers, false);
        renderPublications(data.publications.preprints, true);
        renderAwards(data.awards);
        renderActivities(data.activities);
        renderOpensource(data.opensource);
        
    } catch (error) {
        console.error('Error loading data:', error);
        // 如果加载失败，显示错误信息（可选）
        // document.body.innerHTML = '<p>Error loading data. Please check data.json file.</p>';
    }
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAndRender);
} else {
    loadAndRender();
}

