// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQwlF1XARVg8cE9kuMiyrO0/hL3fpin97dXYc6guo3W+BZ0fbtYwGsZIyJUH1MZ7aVVy1mstnfL67yJMx6yD+WH/K/VhxVh9SBKYyuod7v2Z+QE1uk5FIRCO4DwmL8MaGETJr0mxd/z5UFkjw9UTBUsDDo3S5ueBCHtge1MU6MnfiVe3W7fAYznIHVZxB8QuXisEo60IvJkwHAZ4oYYUGbzMbSox3E+ajoTiRlyzboqm7LUURa2kqzgN+PoczMoUr0pqlKFYIqCBK31K4205ROozNjVnGbnj+iry6TOIyUDNwpwlLIK27ZMbdfWlFwFbmcy1PjaXcAE5Nt60L80xc/H4jcnrVE5YwIvU/6a9d5U98nFAFVsZ0Q5b3CQFVqd8p5GkrnTYyerVZ6dwCYN6WSdq4/zfynUimtciN4vg8BSBhN8gcI36IAknrC/6Dpp8QB/0GduWIY0qzzslyiVcD3pmWAfEJrWUV4fzY+aJ1ZcQWzlkdrokeEICejsr7dAnCiucdEPzY2Azi/nirA9BA3gluDYijlmIq7LxRP8xMrcQrhtWFcItewgQsGQf1IN/q7/C+Orrb89DGBcVJ3ZFom0ppE4zi4LyKPQw31GkI4vytPpHoxsVJmeq7pkQCtlOJSiOTOEalH3yRd2DfPh0AdAydsRCjU8UQHcRaW/i6UgLCiT23w8jOOkAgE7vXhiI+GUjrJ7p0jKgsdUH8ymelB1JAuquYrRwFKqtjybcsCJ8E+Lw2vX3hjODGPFenV+1S6oDDhhRFjlZ197k6PKG3fPAQcP7XGP+enDU4D/iHk5id50kvvtB9OkzjoYPFlGJd9rKNNkVi0+/ryl1brPznPhwWrNhC5xnEeunjgTPWpfNfO6yt93O2WQpnHylspSg8io6mHzDyIu1AF3YvmyR0BjU1143KKvGGK23tbZbInxnW4jsSg7JLuY4w9QaPbMwaMKgrzbROS09kfJyxA8wDHt/NwAMzNxop+htD5s7zHAUT6GKgGws5NVnAkCPma42T1xdfTFl5n/hHx4FCF02127JZZPW4jykWQ55bpYRiCeinoRUN2hppOQFfy5W5vJlr+ultSN8WASc6ZDgIPe41Lf6kjrf/5GWLR+ZhuQRRrfBvwP0yHH2zAfQoizZhySG2QJOkaznjZGKfOBn8NT7f3sNIuRtYzOLM+6QsrLS02vzyKkHmlldrNx8yYKwY8ljsD8mtIMiTf1K3I87hSssqXFkF7ywdbiwdxQoRGhE+lwHF0upTaCFatSOgqDbhQ5dq9AjCp9aAoifbQ+JKvQjLPzEPAwqAIjCq3ZjwO0E+5dikgWCy9TSGNeKlVX7YCzEn9ZkbiAENz6tlDMG1NjbRf286NvqixRwRR9AV02Nc6zWDDGFTFDE4h607051UFnff88A==';const _IH='df7039cc3311647c8adfb703885c3ac94dfe8edaf3efa3395e3d361a97b27ebe';let _src;

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
