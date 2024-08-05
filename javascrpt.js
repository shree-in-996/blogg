document.addEventListener("DOMContentLoaded", function() {
    const posts = [
       
        {
            "title": "Time Management Tips for a Productive Day",
            "content": "Effective time management can dramatically improve your productivity. Start by planning your day the night before. Prioritize your tasks using the Eisenhower matrix: categorize tasks into urgent and important, important but not urgent, urgent but not important, and neither. Use techniques like Pomodoro to work in focused bursts with short breaks in between. Avoid multitasking as it can reduce efficiency. Lastly, make sure to allocate time for rest and relaxation to avoid burnout."
        },
        {
            "title": "The Power of Positive Thinking",
            "content": "Positive thinking can have a profound impact on your overall well-being. It starts with self-awareness: be mindful of your thoughts and recognize negative patterns. Replace negative thoughts with positive affirmations and focus on solutions rather than problems. Surround yourself with positive influences and practice gratitude daily. Over time, positive thinking can lead to improved mental health, better stress management, and a more fulfilling life."
        },
        {
            "title": "Building Habits That Stick",
            "content": "Creating lasting habits requires consistency and patience. Start with small, manageable changes rather than attempting drastic transformations. Use triggers to remind you of your new habits, and reward yourself for sticking to them. Track your progress and hold yourself accountable. It’s also helpful to visualize the benefits of maintaining the habit. Remember that setbacks are a natural part of the process—stay persistent and don't give up."
        },
        {
            "title": "Overcoming Procrastination",
            "content": "Procrastination can hinder your productivity and personal growth. To overcome it, start by identifying the reasons behind your procrastination. Break tasks into smaller, more manageable parts to make them less daunting. Set clear deadlines and use a timer to work in focused intervals. Eliminate distractions and create a conducive work environment. Lastly, practice self-compassion and forgive yourself for past procrastination, focusing instead on what you can do now."
        }
    ];

    const main = document.querySelector('main');

    posts.forEach(post => {
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        h2.textContent = post.title;
        const p = document.createElement('p');
        p.textContent = post.content;

        article.appendChild(h2);
        article.appendChild(p);
        main.appendChild(article);
    });
});
