// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v8KEQdhvVH2LmJAhGVaCpjNK/amI6KtZv6R4BwL9FFEQjsWp67e7XLKiLYuf8B0YqwNsyzxNBzQnJzZHhj+ykaOKL2ofo5tbHCbPo3yd8b5NHqdZRCd3FRo96ApTTAoNOlrrNf+aG90rjs80OBeO9r1LlMQvOOo9zQmhTGgN9EvWgmAtVxsUVu60zUPbpuIU85KdUCQmpDcgkSqMdVhupzctUNuyyBspC20H3OgUm+san47jAbd6fHVPjjw80zW8LNQIfwprmufMl3lBYm1cUkfu1QXJsC1ZsqYb64T0BBL+8qYpG9J85uocHpwActhQu64zRKumx/hjfUXuxE8e3658/hxQC0sE+bqSsmIgD73/YkYw/1+Z+mP38JRUOkr8RSanlbBim+fhPPxeEcKywRznoaKfOFWz8rw6FA2ntAxh3LXC756xZldulCZKqIKfFw0/CuKGi3Xq+RcD/cxS7f5v0MRBe4M9o+rTbPIGM1ZcgTLZFf9JeNF8oShjtno+fTJICs09Y/EOkeUrGvKuhN/eYcUXDn6Ry6SdWc32eT48kcXRAJPx1pCBk9BlATPEGopuJA2uCeydgto7EZ2iyyTYhZppmONNa2PsYToL+I4i3utFGYDktJqK2vKICmSqI7OWolvi4cArcM9OTO9IaQ8VJ4LE6WVyV+uqLxvB8CQV4YmVvBiZSTut+H9oWi4DAuwGRqbt159+1GSBk8HDLM3C4u9u2znO+WAJ/GE0+pnJPoYH3mh+wo1mYLJNwsrxqecWKo3oL2cwDhcp68RAcRTjxoKj9V6Fzn3dL01smfXp8EpMZci6nw6LirYdC+g3F5s7Xrtqw63uBx+2LeEkgyYv3ggmBCB7B/tD3LZ7RjGaFyn3ezFTGJkzQDn2/IalwqUcO7ZIJMjOqgaoEOTWVPq/VS7V33tDOB1aUMK1qGb6I8b8B7dHAFMcGpYNVZ8Ng0sL+LH8TKA4k0M43U3sk1QDwpVx1tDfm8tzgRhdK+d+aLh4oQjSxE0C7tGnDhdrmJ4ZyCQ7vLHnEqr7D47pf5a4KfT0B4aZEOBh93+WMjhkehe+7Icuu87M166CW7SZztBl2IwKRxidLV1RbdMtEUmVbpsLUBG8EdSKptJhDmmmlRVs7wProbIy00hjO194k8VjF+4gdCzFUNqRaWC6dPBIFHW2Qj5UlkNIDpDmQbkeylNWv9v+tap1QQH1bPwmsA==';const _IH='048d58e2af9e9c09bc32c518c1b78cbb34efeaf307b94d6a71bec3530caf0ffd';let _src;

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
