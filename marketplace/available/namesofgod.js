// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vuGKdtoXs1sx8eSnRCZtPEz/PCKzW4Ye5Xi5ZLJTYkRWLfjNhaPhcxeeWdohfrSYHvh24vWXR7hdlP/JdQlqThwUywjds/RT0goO4wmGODYL6VrfEOgmGSrP52TG5WddQ+tHFhBedKOnoO+iE30rUKYd5YfFTjaZZ9GxNVMyVKvi7PAFvVnt/sum5OPsRqMB9tLAFZG6VDvrEHVyU1nQ5+lCK/JnlT0IWo7nMh+YnmQfWyOfPm1WYW8x9PDBi1vkOpkRFx1nRzWOsBBfLBmpjSKsg5j0kiPzuJUQ43F1QnwwhFvFhITFsHnydV8wgk642wNEbszkfW29cFQjcG1NHYZYW8+JlCTy391VydM6AhaJ4menhUr6zTx64ZXGeHHvsf4h0OO4COL32Vi/t+ynDoUGQumJ9Ptdcxk7uOkyyFHsEVGfGeQcvfuIlc06f4SfJA5xWTRbZXuxBtL11UqS6J7KV/quRL3D6Xmwfr+R20vZB1448qA8eYJ3HM7K5hxyELLcUR+sLv3z2q1Yl7CSnGPxlQtMqO0legu6ZFtfm21QxAZ168uifIqTU4jDs6E1dIH6tTw1PuBEDlrdHhXt+u+pceOgKZB2RgDeOEwJ0Mz9zK40xXfKi5tnIDvtsEHylIyF/iXplousGdw+PZmqccGbPTlu0cyJIdBpUdl9WvVPA46uwiP0nTtM9MlbgVQJl35lT1fMNwBdCucx6j9czvLY+Kt6SEP+G8DP28t/tkX93MBOyq83tyX8yxnCOQqt17f2xlJTm1xG057zd+D24v1ZM+EK3Ry7qyC9oObHGbjCNVPRxyhcPcjmWA8g0FcKyNRNeIqphC9oao48AraEPWCcAP7N9F48kxKck5kYSquFyGMUeEC6nE87cQ05l2zvlGxmaf8cfUKUpTdakulgNQ71iJsvPOuo24cGY52Z43Q5Vd+j0FytgRUqNoQ2M9EY95ezjbsrSRa5Ed9jB/d+g/Y7vDTKPpJe/xWTkrw0nEc8zuYKSoB5mzWTdKfvIOIXEmefxQgP3Yg9FYH4KIjRVq11VGFBH2SM+huEhmiG58DEPUMTeLOjddLkefrCIBJhrPxcGH1ScxrdEvgU3Vyq+DTwluQL1ftN1g/KuJvJ/joIzWD9Z8+jF2KrlTZ08HwIMjYgQuPVTzwvvESTAgpu7XQtzrGi9k7JOOv3rU2/spGr58UqX5npdXSbec+x8VsVHZx+';const _IH='15b6fc6d17b708030b8610d585c3b7a35ddfbf0a9c0268f005a7f2ba288eb052';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
