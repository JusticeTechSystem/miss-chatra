// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oksVnkGW7sr47DviLVVI1cgi66qqwtgbbwRMKnvrWzxnggz+eMndXtU2h2aykKueLK9xhAjVAL7In2NrSjJ1U3pyw/c0dsTtiq9g3V5/wtXYelhTSt+0XBBlnx7Y2YmZqwE3RarBl+2KL1eHX1odrdRAKJrD2Yz/AfUVfJz80oUqaPeQem9R3K9W2aBDuMrIshEiutlhauMXQ7084fQc3qser28CX2AMLbkwkC4f+PC/G1AfpVbPsbqkxPDlp+Pry6/WId4duQy/DYHs+g0gkITnnWAkA2vQNemV8PxZmlGG6QohdlwMjma175/veyPNKvJf3Bn16dpi8aXaojvmA9YFQJsrL+Li1g4xM7TFGo20vd5aZKus99sZHiei7Nz7LGIYV6l4TMwDbLZ/Gd/Vjw0SLKHRHhDpAOLJoy90yx+x11l6jtyEW7LMtiO8FawkARRRr5iKYhLE57m1ugRg3Q/+Y2FS5wyqXzzNcen9BJzrPM9XIsCwx4YjJ+Hjhe6GsIyWMi4nz1UG5cuDkIzoOFZptlUMSstu/UVhDCUyU0NozX8RWNLAGsvC0xfvjrAMGn9zazmQeHxuFd0E/oiMqWmrwtS02RMHDGZBjF3cLP5lh+3Y7VgXX+HvFuqtvKZ6c4DND4XGIeEtYEhQ4dA16hUi77mEs9UIco8qbeVCIlt+PUQ/JIz7qSiOQNl07ttG/A9ijZvENWOuYH5LBM25X2n6AAG+LV+X5LWg0hHWgex3+BkVAIVb46puWVPauNqbxuQaOm0U5FN68ydTpPYI8vqh56snXXMM1/kB6ZEwetiGIqbQHLBEygALfRiVkDWMVwS7uknGWQoA0nVqvMfTAvqyfEdOooMQwIhazhpMgkM1m+3KdZdgJiXMaWZfG00mGVFVXUFMnbawnc6sdRwDpZ+NEjCJGXMLWK9fS3AJQEXmP7OrdyEwScoTzP3JeACHGV0WhMzr5gixqcX8WzCtVhCHMzQD5uUQnLraiyvnWMm0+YhssyGR1sTQ+UpBGXC2hl3L2AJIvlVn99/hiyVeUVDRtHc3UormS9GbJ60KdpirJRsrdWGBoRri5KR1wQLAr+RCDCS+ITrCeamoB7WMVknNMz6cdHNA5Ic5S190GHg28lO6ZaUFnbpBh4tgsaFB/5TsTfsig6lxwMemeZS9VOn+9wSEz6gvB441qdOyOX0w1ltsEPRxX3m7G8xvhNG4IKeEUkFhKzge';const _IH='64e2e6e6d22aaf42e3cd249d1669765692a6d50cd56dda323e4a3cf349dd40ce';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
