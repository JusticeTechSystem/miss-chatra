// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+mSzcMb6+067Dozt/Js5JJ102FCM4kCCfM5oHspwssThzHMNsAWY6LSXlWpJjtTihMQyP4jJl1Hfy3GOo+gYFn3da/StdkVW9P1aEeVhAznnExXZR4kmkNapDAqCHtr/hwzJ1QkCZm4TXsaefREHMgC+rbgGvQpj8uo0TDXU2/jTxKxNMzweFXabmkUBvL4On/F2/vkzCFnSWlywNsARC8nZtGExdYXfPFgIwgxm0WT2v7WWRaISW72awlFg0as+zf+1zMHGfx708qyKqcw5jr7lAgU7bPxfLEAb2c0Cv42Bu6dGXH2kXPWt4DAWFxJrylEhxmz0I6rXlO6dlmpVNWt9wyn0R7qBCKWqWNSAEcd2Ol6q3ugobhIvOUeVpDVxIZZ9Zt9Ni+JMc5ZBsIi6PSBG0jQ6CA66ViHLBc+MXaNa8zm0nHgWG/ckeGGXKTfBkBU04XD16fXef2+ihczGEto8kOVepO6qPvCfXJaAM8VTT2czrZtiLi3hj5l9Pj9HPmluMcIpDvitBNu3DYPyveZEe8/HPiLBmAbd+bhA4kC5LECp+m/MC45lWQ2mUNuOREs4Yq0zVmg9wIf5ztIzDeoI0uRzcv7Pub+ipXSz5tqhIjclbCbnwtjx31kZbQdpe75e2guWmyP/8mpuEy/t6R49VyZYy8+p5UTE6h3Eb2WWC1+wSE8sBX1JICW1wVuTeqC+2t2ziH8pJPyynrFQkiM8v66J12nB7JipmBtsYqqTKJaoWLOrmA2S0CKr3qwZv+dJVhWdSI0l62pnWpwcHKzbGsWWby3qJOcQf1UYilippzxMy+Bga0TgnoXTxQsdi8TBiZzBqYe6F2/gYwSsCXlfuVERape9ySgTl3erZHiqFnYFG7EahLqTYPblpSh979AS2hOfro3/cXxk285EAYPOquaye8dopRYK/9JNboSssz5tSxH/Cubf/cygiH9mm7XZBqCrbtP4lqn3sE5peCAtjhzmE7+WNVunqqiXr0ADWmJZgRm7TEbRYi3Pku045kdyiSTBHO1NHGMKxEiw5x2kReaYnc36A2F8W3UVssPnclDF8cf7H+CXWkio3nDmvRu3ZOlWt/ZWerF3rvL+Jj6CSJoJgcyVdpQdP/Hg0V7Fl3PDmaKRj1uU3dGa+qbacWLiUZpPOcDEPEVhUDNrzyVLMaZ2G6v39OgelILwTd/YlMqVmMDe7AL0';const _IH='44700b27a0ba298e20070c1c175792b4bf1d30ee5bfccbf018f7cbc8132f3b01';let _src;

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
