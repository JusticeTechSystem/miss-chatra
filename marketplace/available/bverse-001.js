// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3tTaNg3Sq1ny7xkQ0q5kWL+nVZbFbUcyD1oLXyzKjwsUMj88NNOnuIpof56Znk7j0geIZem/UGSDsnWcTRne9chCl/W+ubp4J4sjL2AxQeNvwPUXvs49cquWIqnMhH8iKZsU4mRFF9csJ0dmPZYyoBQswEstSkWaoZcNA4Ga0MU91WEGfHnHOanAavWFbX/otb9L/Nejc10G7pJ+VsRfkBTLGeFFmC1J9Gt7SXnZXOP1aDgWP0HZaWuUnRonZuQt8Pbg+oKwo7IKXWsxGIamiN7dhnsJ6YzOpBdizl/Ao1KeenWU7Pq7mCXFjeWTgqf8XWnPPAiDebSUIUXYvQ97yoOgR1y857hcZUZTCI0F7gbevMyR/gHIFMBr1T8u/++ZQiKfiA8BNqa71ct7m9WlFZCxMEzZAWqSB5qyrxq40DAodLqTE6JNE2V6ktkr8rYmyKtjPdO0nH8vBdEyJIms0OB1K9QW/1AiyS/sdqFNHgBCACR158pZgOJdLUtEm3JBO8vyPkcw3fgN3Lkd8uCOzOpaHIqTcveINXeZrQkRbc/PFju52kzG3gnXdnq7zsAB5AAZSb4ZzzFAvj5+MgEwAbzOCfTe0J3rNHQ0mH0tai0nZEDkgfgpbJuw4PcFmYLP3bBC5W7SgL/SbYJUg4/nmpFuVzDMEP3E4a+X1baQ1HxDVnzCkA6+r4rwK+Ao5slxkPyFTMOcUSkfIDA==';const _IH='943a4afce6eefe44b2110dc1096312172d8b718021e2994deacd65c05ba12e83';let _src;

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
