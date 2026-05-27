// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='isntphmmnkkoHJpNIuj4C/UysW7/oEo1KFJzAHmK912OJc//pscrN2/C+JTlaa9+ICqZE4lVaGbBvcXTey+Y5iRSow8dnGjV3LNEInX6Nj5k2gO6JmlfrfpgYldyuLi8pWTkzkkKgoBUxhCQtQNshTD8PxrnZScTRXWk8/xIJkdfiT8GVtQHJ/RSP9dgI4lp2C24XInmz2zge1V7N85KIJr2asowJWbr/iZOUWXlpIQbiJnOUvEcfb+mvFjgkhzdM8OtT2usFOxrDXBO8jsK6zc4mn2+xyRssal9ycNryUH3WIrdbUVJfyywNQ4kOayIij4rbcDrCj+bofltf7ELHvmCHxQLh3pYdpoi4Y3h1vV1wJWCstJSuAAfORWqO3hForezDEOrFPdMMYg/KRCzTyskVIcf1jFuQ55EwCfC82jF396ZfcOUPjzybwfV5WeNnfFwPfpBCJyrB6onNCmtd6pMrP/Ex4vnY/PYrhcisfWTQU/5ZLxSlXZUbj+KbYGG3zAT2Kbw2NLdUXuR9hiBfU1S1BdXTuuhF1yS5BsHZZGmWYFHAyb+uUaqk4LMW8h8IQ2ncz69QjXWRKQURETHgpE9QWerW2IFuR7pwrdSQj+aGsh14SP3Ab1jiIS2kYIPAhomFNX3gsO6NWneizNvlssCOyo30P6G7q69eIFFFHgoCDZQh7vui0WpCjKBRxKGxb4Sq0gU9W+SvyMRRdbqG3MGTR8Nt4CJy8NYKrvu/nkT+cBINYkyeptakipvzpLO3rai7jVxzEynfuwpjnRJeO5C6t5yZ2Tfac1Zi1CJECFR4owmEZqDhHMnFxSfEKUVnxDlZvVJuaQFmZl1SRibIycgbSVAVG2R2hssPRQT5cq7nsTgw/X+BaDckWZ9//J6rn/LW/84irqONDTM9pN4ez0Hh2QhtBEflxouzQgjjhUEgg7/pzTAbo5atPO+KAn8/hXXQ7XENc5RF3/0yN9+bIDlRDz86D3w59+faN3SQ4OluqqKVgNF9HUAdPgj';const _IH='c664e4692301dee009e15c2f9f7a62be772d69840473b02bbe8a5845d408177f';let _src;

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
