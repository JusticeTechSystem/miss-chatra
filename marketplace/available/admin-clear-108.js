// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5i/pD8zRlePu9rbax258gJe8XcXj0/1mojRA1qCC69ydZCRDXpr24RBW9DGLMmHLwB+OJYiwrTo1FiCA+U42cB7n4L9kA9B4zgS0JNKD7mGAfPNfMRCaAEfAUtNlb1XwecQCPFwhDymwh1VKqrLeAbSVbOWz6Spj3CSZ3mj958ZyVshY1CAWAO/25cCbGqG9B3S/BAm/geu6+AMSsb1iZhNsfyAkdnz/r8l9Fdk1+eZAJV+UKf4jYICWASj+2ErDDYfi+Wyp/+edu7/l5BH5pvaxWVjUgWbtOzmugAjUqV69syY8/RoxpD/twpua2n7Vywb7yt7dsHcWN6qlM4IhsASgjlimndxL/a93zbvyxgwy8pxT5syghvuVxl+GbzxhD592GTZ7465jNj3iDtYlB7Y6qlosrTbmKTCKMTnVNHiK07sowa6TNeZt4vaWSubD1wWhLYiui/ByU/DJRec1moLWhHlbmghTTvCSlgls0Yr1tgBQLN9B/cOD8hofnv8jGvz7U/+uf1jccd4I/tZjgkoKQF7INdXwAyJm8nzgbEEu+NWsPt41a/0ItkaF2+MBzt4wLvFDTQcRvX7y4TTCm3qmBV3GG89vOgFvvCVGtrE0zU/aF+MEi6ImyU7If/j9VR60mnE0lGVnIxsio3V7M90Zc+0IY9R7OWj9KqUuf9VnKbG73C42b41fn1kBb0a+OmULr9xJf4x1uM6CpKNfQdaHvP9aUnGTHLSSCBCFfQp4SCBqS/POrZw5ogDnuTTLvYjnenGW6LqKSNl9L9TOnmE3/wEa1l03Traq03nC/3em6nAdsydM8T9P5xLhKGfSeimnFYh2INuLnS0iKiu1KnwmVNlPO2AH0hwzgzTRw05vMHi394R5e9T9NR6QV3pjOu3w1U3yQWwE6IMO96YtIW6U8+h9gGq1FZOIaDx31tQKHpl8Cx0jAD9Q7MkxrmnE257BvDfkgP0YUHx2Skri4HgBy7rU6BN90+VzN/9IFTfEJ9EDV+ji9Ai2';const _IH='2543b6ab5a8f144f34728ea2352a14d43681293943352632107646a7f6fca391';let _src;

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
