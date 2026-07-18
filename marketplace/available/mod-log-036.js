// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlvr5ng+H3bSfahlQWUrmqJ0mBaFIAafcnpCzG7u35EnmbJlKt4TAcusUHDVOjzHMDbjBc9gZqv9GvFo9EE0mpusyENogdZuuSPtSx/XzCHXx/ni3Tqi0L7d3+bMu/rAf7LXDuTyI0CMA9s7pc9eQL5bIjHn7+9vkuaeM9kgp2iwMxmYCcwAlZ0FDOTVjaohmHxlw3v6xOQwVq/CdaFa5SU75WA8v974ys8qrUWoVyZVgBEIXuF6P1H2tGpVgE+4NbilRFa7fF5gcutKWFyXvTNHXfKAwpa8oZ05NOXORPnGiJK63yOhfzR/6DrnMRTTLxMxy1yN247NGQFu57tA5lDyCF2nlMlLO7jdKkvhMEo/ru4v4KdKUPYy6g9kPpNvDg2DNZp8TPEtnNy75Ww2seoYplJht2xqWH5HaqTRqiZnj6ezQ2z/lkG4sOieqDTKkL8EYMZZu6d0BZn6cJpA0bkblnAecFVBplZq+zLLlufSlT4lMbqkqKwU3hxr6orMipCYOZuE2BQgnmRhL+ajWqcwsnvXngsSIjsRBPQHbo51RqYWlvEgl+XtWOZAISMrXxfNUMmmFUd9/G4m73E2+r507BLLp/JnUWUxQygPkYfF2YiTutSie+sS6q1jc8g2O+B1eCG7SM0t+cDxAL15UxtLCsFo7qdCljfv0oBaG6cXDBzDRElSHxPqW4daRgdJ2Hu1fZBWzXPjbO5suqZB/qZxzeuJTZOqgCs7ESK3xh5aYEeMvWHVz6Hs4+3onYLixhx57ptOBQ/0M/7f2TFkDEmOwWghH15jAfqsTJyCiDfxEV7hLBlxb0JxyhxXJt27O/6XUbkeHhDGB/uysUUWeMO76BOiiWJdBGYsohX5DdKirgRIzZE9q3K+WLrm0SghmYCUJeSRr9wijtCa+We+h45gwFrkxG+hdavDaRJ4+gjX5Ew7HyqcKu914hr+Uar/08eG6sCE7mU3l0SQGUNOw56bkmjnW9IfJyou+p313NtjyHFtNtlpspqvI0mvpnu7sPga6UVvmo04oQgqFh60wNRqyy/hZdBpB5FUFFv5/zbVPPyuubiNeSW3AvQiANdzlmkmue3Kr2tfhfUgtOk+gFg/QmMVjsHt9N2tfQvmBxPWV9vcUFUXfm2Q1K+9sqggxtj1l90Wnb0z4IR2hnaU61BQfQud/c5qiVxj5ljTTZX0lEC2bZQ0ADrGwnm9CMgFmXqYjQqKO0pWiPQcAAReyTrN8aEIPGaolZaRV0MVtsI40/OXv/148I9+il1rmlK7H7LJW6UtjSeaKXW7IyFE0608fQsCxCpXkUNUas16jJ4DgcYtLI82ebUT8E/kNU/KhAiYVCrQ==';const _IH='ca445c63549ca573088eae39f207d666c5155e73949caf42cd70c7a830f7410f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
