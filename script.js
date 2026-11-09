/* =====================================================
   Book Marketing CBT: Main Script
   Plain JavaScript, works on GitHub Pages
   ===================================================== */

(function () {
  'use strict';

  /* ---------------- SETTINGS ---------------- */
  var DURATION_SECONDS = 15 * 60;      // 15 minutes
  var PASS_PERCENT = 60;               // pass mark = 60%
  var STORAGE_KEY = 'bookMarketingCBT_v1';
  var LETTERS = ['A', 'B', 'C', 'D'];

  /* =====================================================
     QUESTIONS ARRAY
     To edit a question, change the text, options or answer.
     "answer" is the index of the correct option:
     0 = A, 1 = B, 2 = C, 3 = D
     ===================================================== */
  var QUESTIONS = [
    // ----- SECTION A: BOOK MARKETING BASICS -----
    { q: "What is book marketing?",
      options: ["The process of writing a book", "The process of promoting a book to reach potential readers", "The process of designing a book cover", "The process of printing books"],
      answer: 1 },
    { q: "What is the primary goal of book marketing?",
      options: ["To make a book longer", "To increase the number of pages", "To connect books with potential readers and increase sales", "To change the author's writing style"],
      answer: 2 },
    { q: "Who is a target audience?",
      options: ["People who print books", "People most likely to be interested in reading a particular book", "People who design book covers", "People who own publishing companies"],
      answer: 1 },
    { q: "Why is an author website important?",
      options: ["It replaces the need to write books", "It gives readers a place to discover the author and their books", "It automatically guarantees book sales", "It publishes books without permission"],
      answer: 1 },
    { q: "What is author visibility?",
      options: ["How frequently an author and their books are discovered by potential readers", "How many books an author keeps at home", "How long an author spends writing", "How many pages an author publishes"],
      answer: 0 },

    // ----- SECTION B: AMAZON KDP -----
    { q: "What does KDP stand for?",
      options: ["Kindle Digital Publishing", "Kindle Direct Publishing", "Knowledge Development Platform", "Kindle Distribution Program"],
      answer: 1 },
    { q: "What is Amazon KDP primarily used for?",
      options: ["Designing websites", "Publishing books in digital and print formats", "Creating social media accounts", "Recording audiobooks only"],
      answer: 1 },
    { q: "What is an Amazon book description?",
      options: ["A summary that introduces the book to potential buyers", "The author's personal address", "A list of printing companies", "A document containing only the book's chapters"],
      answer: 0 },
    { q: "What are book keywords used for on Amazon KDP?",
      options: ["To increase the book's page count", "To help readers discover books through relevant searches", "To change the book's title", "To replace the book cover"],
      answer: 1 },
    { q: "What is Amazon A+ Content?",
      options: ["A book-writing application", "Enhanced product-page content that can include images and formatted text", "A system for printing books", "A website for finding publishers"],
      answer: 1 },

    // ----- SECTION C: GOODREADS AND BOOK DISCOVERY -----
    { q: "What is Goodreads?",
      options: ["An online platform where readers discover, review and discuss books", "A platform for designing book covers", "A book printing company", "An online banking platform"],
      answer: 0 },
    { q: "What is the purpose of a Goodreads book review?",
      options: ["To change the author's name", "To share a reader's opinion and experience about a book", "To publish another edition", "To determine the book's printing cost"],
      answer: 1 },
    { q: "What is Goodreads Listopia?",
      options: ["A platform for selling computers", "A feature where users create and explore book lists", "A book editing application", "A website for hiring authors"],
      answer: 1 },
    { q: "Why is it beneficial for a book to appear on relevant Goodreads lists?",
      options: ["It guarantees bestseller status", "It can improve the book's exposure to readers browsing those lists", "It automatically increases the book's price", "It changes the book's genre"],
      answer: 1 },
    { q: "What is the importance of genuine reader reviews?",
      options: ["They help potential readers understand other readers' experiences", "They replace the book description", "They guarantee international publishing", "They automatically make a book free"],
      answer: 0 },

    // ----- SECTION D: BOOK PROMOTION STRATEGIES -----
    { q: "What is a book trailer?",
      options: ["A written contract between an author and publisher", "A short promotional video introducing a book", "A printed book catalogue", "A book's table of contents"],
      answer: 1 },
    { q: "What is the purpose of a book launch?",
      options: ["To introduce a newly published book to potential readers", "To remove a book from the market", "To change the author's profession", "To stop people from reviewing a book"],
      answer: 0 },
    { q: "Which of these is a social media platform that authors can use to promote their books?",
      options: ["Microsoft Excel", "Instagram", "Windows Explorer", "Calculator"],
      answer: 1 },
    { q: "What is email marketing?",
      options: ["Sending promotional messages and useful updates to subscribers through email", "Printing books through email", "Editing book covers", "Writing chapters online"],
      answer: 0 },
    { q: "Why should authors participate in podcasts?",
      options: ["To avoid communicating with readers", "To introduce their books and share their expertise with new audiences", "To stop book sales", "To replace their publishing company"],
      answer: 1 },

    // ----- SECTION E: AUTHOR VISIBILITY AND OUTREACH -----
    { q: "What is a book club?",
      options: ["A group of people who come together to read and discuss books", "A company that prints books", "A group that designs websites", "A publishing contract"],
      answer: 0 },
    { q: "Why should authors connect with book clubs?",
      options: ["To prevent people from reading their books", "To create opportunities for discussions and introduce their books to readers", "To increase the number of book chapters", "To avoid book promotion"],
      answer: 1 },
    { q: "What is a book blogger?",
      options: ["Someone who writes about books and shares book-related content online", "Someone who only prints books", "Someone who repairs computers", "Someone who sells office furniture"],
      answer: 0 },
    { q: "What is the purpose of contacting libraries about a book?",
      options: ["To request that they destroy the book", "To explore opportunities for the book to be considered for their collections or reader programmes", "To change the author's identity", "To remove the book from circulation"],
      answer: 1 },
    { q: "What does networking mean in book marketing?",
      options: ["Building professional relationships with people and organisations that can help connect books with readers", "Writing books without an audience", "Printing books in different colours", "Changing a book's ISBN"],
      answer: 0 },

    // ----- SECTION F: MARKETING KNOWLEDGE AND STRATEGY -----
    { q: "What is an ISBN?",
      options: ["International Standard Book Number", "International Sales Business Network", "Internet System Book Name", "International Social Book Notice"],
      answer: 0 },
    { q: "What is the purpose of a book cover?",
      options: ["To replace the book's content", "To protect the book and visually introduce it to potential readers", "To determine the author's age", "To calculate book royalties"],
      answer: 1 },
    { q: "What is book positioning?",
      options: ["Deciding how to present a book to its intended audience in the marketplace", "Choosing where to store books at home", "Deciding how many pages to remove", "Selecting the author's writing desk"],
      answer: 0 },
    { q: "Why is consistency important in book marketing?",
      options: ["It ensures every book becomes a bestseller", "It helps maintain ongoing visibility and engagement with potential readers", "It eliminates the need for a marketing strategy", "It guarantees that every reader will buy a book"],
      answer: 1 },
    { q: "What is the best approach when promoting an author's book?",
      options: ["Use the same strategy for every book, regardless of its audience", "Focus only on getting followers", "Understand the book, identify its target readers and use relevant promotional strategies", "Promote the book without understanding its content"],
      answer: 2 }
  ];

  var TOTAL = QUESTIONS.length;

  /* ---------------- STATE ---------------- */
  var state = loadState();
  var timerId = null;

  function defaultState() {
    return {
      name: '',
      started: false,
      submitted: false,
      autoSubmitted: false,
      endTime: null,      // timestamp when exam ends (keeps timer correct after refresh)
      current: 0,
      answers: {},        // { questionIndex: optionIndex }
      result: null
    };
  }

  function loadState() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        var parsed = JSON.parse(saved);
        return Object.assign(defaultState(), parsed);
      }
    } catch (e) { /* ignore corrupted storage */ }
    return defaultState();
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* storage full/blocked */ }
  }

  /* ---------------- DOM HELPERS ---------------- */
  function $(id) { return document.getElementById(id); }

  function showScreen(id) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) screens[i].classList.remove('active');
    $(id).classList.add('active');
    window.scrollTo(0, 0);
  }

  /* ---------------- START EXAM ---------------- */
  $('start-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var name = $('student-name').value.trim();
    if (name.length < 2) {
      $('name-error').textContent = 'Please enter your full name to continue.';
      return;
    }
    $('name-error').textContent = '';

    state = defaultState();
    state.name = name;
    state.started = true;
    state.endTime = Date.now() + DURATION_SECONDS * 1000;
    saveState();
    beginExam();
  });

  function beginExam() {
    $('candidate-name').textContent = state.name;
    buildNavigator();
    renderQuestion();
    showScreen('exam-screen');
    startTimer();
  }

  /* ---------------- TIMER ---------------- */
  function startTimer() {
    clearInterval(timerId);
    tick();
    timerId = setInterval(tick, 500);
  }

  function tick() {
    var remaining = Math.max(0, Math.ceil((state.endTime - Date.now()) / 1000));
    var m = Math.floor(remaining / 60);
    var s = remaining % 60;
    $('timer').textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;

    var box = $('timer-box');
    box.classList.remove('warning', 'danger');
    if (remaining <= 60) box.classList.add('danger');
    else if (remaining <= 300) box.classList.add('warning');

    if (remaining <= 0) {
      submitExam(true);   // automatic submission
    }
  }

  /* ---------------- RENDER QUESTION ---------------- */
  function renderQuestion() {
    var idx = state.current;
    var item = QUESTIONS[idx];

    $('question-counter').textContent = 'Question ' + (idx + 1) + ' of ' + TOTAL;
    $('question-text').textContent = (idx + 1) + '. ' + item.q;

    var box = $('options');
    box.innerHTML = '';

    item.options.forEach(function (text, i) {
      var label = document.createElement('label');
      label.className = 'option' + (state.answers[idx] === i ? ' selected' : '');

      var input = document.createElement('input');
      input.type = 'radio';
      input.name = 'option';
      input.value = i;
      input.checked = state.answers[idx] === i;
      input.addEventListener('change', function () { selectAnswer(i); });

      var letter = document.createElement('span');
      letter.className = 'letter';
      letter.textContent = LETTERS[i];

      var txt = document.createElement('span');
      txt.textContent = text;

      label.appendChild(input);
      label.appendChild(letter);
      label.appendChild(txt);
      box.appendChild(label);
    });

    $('prev-btn').disabled = idx === 0;
    $('next-btn').disabled = idx === TOTAL - 1;
    updateProgress();
  }

  function selectAnswer(optionIndex) {
    state.answers[state.current] = optionIndex;
    saveState();
    // update highlight
    var opts = document.querySelectorAll('#options .option');
    for (var i = 0; i < opts.length; i++) {
      opts[i].classList.toggle('selected', i === optionIndex);
    }
    updateProgress();
  }

  $('clear-btn').addEventListener('click', function () {
    delete state.answers[state.current];
    saveState();
    renderQuestion();
  });

  $('prev-btn').addEventListener('click', function () { goTo(state.current - 1); });
  $('next-btn').addEventListener('click', function () { goTo(state.current + 1); });

  function goTo(index) {
    if (index < 0 || index >= TOTAL) return;
    state.current = index;
    saveState();
    renderQuestion();
  }

  /* ---------------- NAVIGATOR & PROGRESS ---------------- */
  function buildNavigator() {
    var nav = $('navigator');
    nav.innerHTML = '';
    for (var i = 0; i < TOTAL; i++) {
      (function (n) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'nav-num';
        b.textContent = n + 1;
        b.setAttribute('aria-label', 'Go to question ' + (n + 1));
        b.addEventListener('click', function () { goTo(n); });
        nav.appendChild(b);
      })(i);
    }
  }

  function countAnswered() {
    return Object.keys(state.answers).length;
  }

  function updateProgress() {
    var answered = countAnswered();
    $('answered-counter').textContent = 'Answered: ' + answered + '/' + TOTAL;
    $('progress-fill').style.width = (answered / TOTAL * 100) + '%';

    var buttons = document.querySelectorAll('.nav-num');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle('answered', state.answers[i] !== undefined);
      buttons[i].classList.toggle('current', i === state.current);
    }
  }

  /* ---------------- SUBMIT ---------------- */
  $('submit-btn').addEventListener('click', function () {
    var answered = countAnswered();
    var unanswered = TOTAL - answered;
    var msg = 'You have answered ' + answered + ' of ' + TOTAL + ' questions.';
    if (unanswered > 0) msg += ' ' + unanswered + ' question(s) are still unanswered.';
    msg += ' Once submitted, you cannot change your answers.';
    $('modal-text').textContent = msg;
    $('modal').classList.remove('hidden');
  });

  $('modal-cancel').addEventListener('click', function () {
    $('modal').classList.add('hidden');
  });

  $('modal-confirm').addEventListener('click', function () {
    $('modal').classList.add('hidden');
    submitExam(false);
  });

  function submitExam(auto) {
    if (state.submitted) return;
    clearInterval(timerId);
    $('modal').classList.add('hidden');

    var score = 0;
    for (var i = 0; i < TOTAL; i++) {
      if (state.answers[i] === QUESTIONS[i].answer) score++;
    }
    var percent = Math.round((score / TOTAL) * 1000) / 10;

    state.submitted = true;
    state.autoSubmitted = !!auto;
    state.result = {
      score: score,
      total: TOTAL,
      percent: percent,
      passed: percent >= PASS_PERCENT
    };
    saveState();
    showResult();
  }

  /* ---------------- RESULT ---------------- */
  function showResult() {
    var r = state.result;
    $('res-name').textContent = state.name;
    $('res-score').textContent = r.score + ' / ' + r.total;
    $('res-percent').textContent = r.percent + '%';
    $('res-status').textContent = r.passed ? 'PASSED' : 'FAILED';
    $('res-status').style.color = r.passed ? '#1a9b4f' : '#d93434';

    var banner = $('result-banner');
    banner.textContent = r.passed ? '🎉 PASSED' : 'FAILED';
    banner.className = 'result-banner ' + (r.passed ? 'pass' : 'fail');

    $('time-up-note').classList.toggle('hidden', !state.autoSubmitted);

    buildReview();
    $('review').classList.add('hidden');
    $('toggle-review').textContent = 'Show Review';
    showScreen('result-screen');
  }

  function buildReview() {
    var review = $('review');
    review.innerHTML = '';

    QUESTIONS.forEach(function (item, i) {
      var chosen = state.answers[i];
      var status = chosen === undefined ? 'skipped' : (chosen === item.answer ? 'correct' : 'wrong');

      var card = document.createElement('div');
      card.className = 'review-item ' + status;

      var q = document.createElement('div');
      q.className = 'review-q';
      q.textContent = (i + 1) + '. ' + item.q;
      card.appendChild(q);

      item.options.forEach(function (text, o) {
        var row = document.createElement('div');
        row.className = 'review-opt';
        var extra = '';
        if (o === item.answer) { row.classList.add('is-correct'); extra = '  ✔ Correct answer'; }
        if (o === chosen && o !== item.answer) { row.classList.add('is-wrong'); extra = '  ✘ Your answer'; }
        if (o === chosen && o === item.answer) { extra = '  ✔ Correct answer (your answer)'; }
        row.textContent = LETTERS[o] + '. ' + text + extra;
        card.appendChild(row);
      });

      var tag = document.createElement('div');
      tag.className = 'review-tag';
      tag.textContent = status === 'correct' ? 'Correct (+1 mark)'
                      : status === 'wrong' ? 'Incorrect (0 marks)'
                      : 'Not answered (0 marks)';
      card.appendChild(tag);

      review.appendChild(card);
    });
  }

  $('toggle-review').addEventListener('click', function () {
    var review = $('review');
    var hidden = review.classList.toggle('hidden');
    this.textContent = hidden ? 'Show Review' : 'Hide Review';
  });

  $('retake-btn').addEventListener('click', function () {
    if (!confirm('Start a new attempt? Your current result will be cleared.')) return;
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    state = defaultState();
    $('student-name').value = '';
    showScreen('welcome-screen');
  });

  /* ---------------- PAGE LOAD / REFRESH RECOVERY ---------------- */
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && state.started && !state.submitted) tick();
  });

  function init() {
    if (state.started && state.submitted && state.result) {
      showResult();
    } else if (state.started && !state.submitted) {
      if (Date.now() >= state.endTime) {
        submitExam(true);       // time ran out while the page was closed
      } else {
        beginExam();            // resume with the same timer and answers
      }
    } else {
      showScreen('welcome-screen');
    }
  }

  init();
})();