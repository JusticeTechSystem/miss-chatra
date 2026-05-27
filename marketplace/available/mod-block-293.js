// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hrhgYKsI29aQO+vmqgreCNR++mr1BQyzLsZPrIwdqUjzUDDz6tlG/oEmYOeKb+Q+eAxWSy4huwNuH+JiMFD24C8DK6Q5tQ6yX+hksaiWV0VgyqTaxLJ0J1k7IsusLmOYpETzUOq6xm4+Piw9q5S3fzN4IuHcz9aM+x8nxVxUP8nna+ClwP9JagD2M/eMzDZK4b9jiXHXdKpuiYfu/p1FBWav+76N0/Jh9io52FyWQaxHkEvcJdLzccSDdI+N9ODW4ZYLfttdO+LaKgFymKTc/EYkKh+FK9JU9Wx6mcSi3AcAJ5NnfvjmLjj7jHuQRxGy0jXJwTT3Ft0AbtHcpiYhv8lW5EC6Kj5IVXn4zH8Vd7nvwaBNsmav1fl842BeKGyqLh45ZegJAgkP7VT1LvGNl+aK1ZRixgudTAnyClZn7Q/lVuMFN/dgClkLx224NAU+xLYVF3PtPlz5/+NbBBZHb+KQ1OHf/3qhWAJm4+BFbSzULez1j/zSO4ZDzRpbl+1MAZ2yXEoGcNL3fwIZfKp9gs/k+CXEKE/ClfrsbQ1JZfRCh4JxOlkGVzrbJDOVO6gvL5Nu7DBWZ2Em7umXx5EMV7/4V1NKJr+/Nq4aB2VN7znX7et+11e75N+7JMKBufWQA8cDYqGxnwRJHIhtHU07wSEXghxEwifH8KMoD+UjAETNLe7Mk/fibVI4atpkujvhJtnyTtlnurxd2WR+mqApAWuFp51FnXn8B9PWxTyxnup/fiHAhCvE1czV4qX157aCj+H0i5IkZMBIULMFczM5IOrKMF5sQ4x6eu4h3441BTvr/ycgFr8OqQTaMplg72eT+Yg1A9PVVHSicaDeQQ1owmWdoYOHzec1+82ZBEXU8OorPQTQPWWuWzCbxdAmKZ+05X1SLL8LhtcbatD4NJkq6Xl+q3IXbaJzpAAVqWG7oKTSPH6l8nG0Ulf1U0cnhdS3kLZ5vhwJXfOyOjZeAlOJ+DJT3RJWzwUFhaeD799Dm63mgEl34TuqPkKAUBVR0cAJD0gg+MeAmmpFfFhHdHrecmg8T2OXX8zmntOvkTQp7qHobaOglMGLZ0Ga3qPbSFjbZG94wU1ikR++LGwlbTweBnwG51K3wOYIWKFF8ru2ZpBL4UncyDdqDrVG0iPiYKFC+6MwFKXiXVLfpS0ano1qh6JY5Bh3jRov2r8nBFLYiUEFsWab8H9QUSHEhUw3a/Gmd8wa7k6pv6GjV+XAfLwxneyZMeOwzomNH1a2+u9WoELC/5zdJ5VLoZkyspyqO11Y9u2cpD3Kat1p0wLkN7+Ne8wU0EOGA8BQwt/RV3kUsuHJICx902OTE5WNFeAx7K+Ru1m/7ZrTCv2mG7QTb35VnE92faxkcXdYalW5p6YF';const _IH='25e04effefc8e3c16382186745b0f638b711ff477eeb842c5adc5c6715720ad2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
