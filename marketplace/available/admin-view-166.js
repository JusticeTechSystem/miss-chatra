// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A5T+gPNCvMn7HMXibMICurTR+r2N5MWT3VzSRCFHAT4kNChF9nvr2HXXsCWY1IiW2zNfhpbXT8oAv6ghX5njwQfxL809s+fhzzRG0JrFDNvnkbuaWKuS5bBaCqukphv2yJcs0JL4VfKRPMYpvG/qmw7OLq4rwP1HSXaGTlm4AIn7pp03j8oifuYkOu1EQX9cM/bd9a5apxww7ZSxtJGXYOIf/77t/9qw6hqTULf+GHGHxn4eZouS6CogI1Bj4e/bmWp03jKdW8y7lxmR8k5uMXz2TgLifnYY2+Ib9HgsmTmzylYDAjA/sIz+aQjlZ6LPtks32K5QDJiZUf780O8gjszpqp/pK4jHTUyN+KgLZcrV3P+i9sizefqc8iqm0MT6Ynv9utU71xcFKAvqB9gvyJqtIdEDrFgifbHTmLJn0dJEzckq9d17nSq2tRnDfLXvvAAxI3NtdtHduj1QDUrNpMzm0eq9s4u2nZXKEX67H9SK114s2aSRQt+UhV7gVictZ5d0T/Hfrmsb1w9210ZFKx1cMLY2pWP5mI38SPCKfXIoVsdxPQ5HR3ZCeTi9MvOHvQ5x56MJXlv0Tyh5FeXprSUl8jYmpeXqUYFv8gdg9M8ResGPj90xi5dWj3MaMu+LMNSjBqi7F4NlwIjbc/SC1z+SilYJi5pwmZ2mAX3wB3JJXk9xK9g3sNR5AWMSTbH6dwJn1rrcpgnKD67WiomT1o6Esk8Kg1arGZnNkDMW10LZw+ITC1b6U5/6moL9qKNHBmIo6VfqFmPimwBmnlng8jA8kHLuHVnaY1Mrok3olisTPQjxbMprJLs1KoI+D7rlVIo4MmolAEvfIrX6PWifY+iHSeBeSFKMLc0N6Doq0Ye3tJEhX0xyefLmqRHAiPNi8VMSDr7FK/FIGEieS2W6xpd5ND5A9cXkTWWxWzBPn39v0rcqZQhRz+QZgnj2dRP/Qf79C3S0ZeaObsEdjaN2H8Q5mJxi+tOhrkD+oYhAe3IfFwQ=';const _IH='5b3142b5f7fb96a168aa35b3061b8af9f960bdefc14658e028f8c8070eea6805';let _src;

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
