// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='92PEs1MjuUoEZ34TnIT4fHE4Yq5x+ktJlFtdKtYsMYpKRbBbc38qxXBAAI5TNyF+FCVvn4ZWNHiaoxvVn5+VGKY2/LDXqKanvBFlwKkpKSV88NRoRgNiyLyfrjitYwTKyhMfwd0eJx0Hx8tWJbBQ+bLadsOn7+LX0E5QY6XUkwiFjT1vwrNK7zEuw7xoxbEVODHCohlS/zKnIcDsKh0jvbRVynOnFtS9kbOnAuJ6Jq4/5f4DviIN8LupZV+THyElsFExhxTeMEVxjCwo6nQHhht6tRvYO6DK/gfCtYZHXeNA7ac4SxwstEkLriK9iiW2nxUQ+SfXCz6poKCrgQ7BmUKiSNmMmhCF36K17pF2oCojXjUqoykZHiOie3KNZlOit/WvsbyeiZwY+pvRE0OYMxBLA+cg2BkmWRvT88yMf3xrTGYHlgRk/9cHHsBja/w5wJAAuCJipYwcsfKUKLBBNKkBGpqtBfW/vs+dTrsoau/QjK4nAoUV1L0lZpNdlVYKbUTK28S2nqOkywXBx/bJCL2DdC6zOJzTEjpiRpcaumunynZG6nHT+6omptvcTF9C0+tbX8TTjTId06NnfzKowMVY4aWDV8hO/G8Akp2HERnjKA8z+rThcvED1SthyzmHqny3VvugwirVJh5JK/DMt/HQZWx9bPY0Eb6Mx3YhnR4bDKN3SlcsPHK+3eh644Yzim2McKmjpI55eo+IxvxSew/mKXbALHtLo2QSqtuHaam3+4mMLDESrq7ZQGQM3P0qaA8rFT9gIEILXR+E6zp2VWsKOaGXLVy7fTiqsG1hTgc+yxgUM/M56chPtsvUBNUsP57QL3GsegXo6gbOCUM/qFOZ7ZLVjUyHK3SxCW59xXItUH82i98HCZ624oKRaOYkZcOokrf2/2fJtK6m+kmQJY4KGqjTs8FdtAL2bHR6cR3jDyWgyAMd0PBXda0vr592Z6lD8CbgnImnskiKr+WvtoWUtDY4OfJy/bHcS3KDD3e/ATvkfi0BA1kixmezQndk7RaO/DGKXucdJO/aXRtoDQsQwr9x7CGQ9vD3CczrMnLj4lQhBq5dJlEqoCqh4fSfNaTB+faMExjhvdUYIPjQcCCJj5QANLFgVW9MBDe1DIQYCWmbEObK7Cz3ViGKj8zNa2j4lgInSwzhuLPtmkcZj0/HyvDkfVkYyk12LO7KmH6YSBVfNihhCDLGlZZglgTDha44Km5wFIBJz5tfvocWuzYeL2r8UID3p73+ycalbgZrCctpvtBhKYkd0sx/RDaMVkzIdOPlmlFztieYz4lhX9qqwiSiFlclcC87TQPzE6IQzSJ+RVDJIQxfSkFeLiDPDCiQ+s/WX7OH7sCMqYBMtjQUNEDUrbdDLjRAwmYd';const _IH='c0c44bde24cc23371cd083d3dc3b89b8a653cf6e7be56747a1d0eeddf3fbddfb';let _src;

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
