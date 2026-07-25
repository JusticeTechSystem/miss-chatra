// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSF19kOtUYmZFvPvuPB7pAXt1IIJCkkVhDPZFr2c4rj5pI4KcLJMjWDmnmTW55CE9/kJ3op4ReZgXchtE4ojuHRs29NF6AuhQQz2pAGuY+5ZccjUXfQsSQPgT464niEKYF8l4VQUthFR+6za2z/JL3GBcadYpR4wbOUbIaSRm/HqN43xs9hPRqZAoV0KwuxPn3aySm01110X/U/4kdGK4wunXwGuWoj0iyvAYPdo7dTxhla89WjC/Ph2M5grZgyDoElk+0aeqf/9zxhiPPuI2LGgvJN6saEr3Dkk8j34cN7K5fvqHl5BTIGJv/Lkt9vJ1RymyItRQFMMLSSuI0BgMpG8DRH0OaXYNvO4R79zVA74+iPfsC+mwhSyr+b8ZFQ3XSj/gjrM0zZZQ3yLWMKZQrNcrA9t0CFCq/18PzA1hLVzqnfA5IO27JFYh2kgTE+3crM4iOIPhSvbUedMRLinvtDYGYuJQ0TuLAD3wHiwcMkbOC1OOPm2Sgl8vIFmGYNBNrSVNxlmOyahv4WxEkhAd5Mldav7TEfQ+IndaGgfnLzRBAgQ/0u7C0GBgwvE8Nfh13HC9LWB87m9thCCrGQDnfPeFcORP2QYh78idxbZi1Zclk/Xbjjr/qrQBffnOF95msgKXPJL6A9Alyp1BcEIAes+2Sa2tbmcWikp4qFyrgP/lBHgryy121My5iRkFVLLRDoruhj0rF+R145gEGiBF4/51plXbx9SajJHiCOSlNDr/DSuJIZBV/Va62i3STXMMeuqK8GtNr8YCCxUma8mr63YDSvrgw81b+PCrHT64yyc8dS4EvEt6ZERjlZ4Yn1iCkJf7SCYctdRd0lMurG0llkejmQWHy5TiJJf4n5OHbkIf0WaWsQIXFfmHu2my6htrZm7DoL1wFdBKQrChVVI/Qfo9SW8V/c3pzFbLoT4cbgEA2WnjypFDDR0WwRde4ZJ1oPzKtKjOzBr0U4lNDJv+ApPY3fj454SXsYyzHeh7vDVk8Fx9jVOj8IXMp+7uGteX5vvpyIFhUuyxCntwcqhx0F+rBfHWMcCopcnd9afnfqElQ2FtwAFs/wbR6y5YkaoVMZmWGK8l8X9I/ABdqUEuqdMklNwLH55egUQlfPG579TwqsamTqt4nWttPGUXlRrM1T/VZWMqIyzJaUXmh7pDLsSMoy3ectt5nlNoWGkJWDL0kJrNZs7zQrHNppv5smiynJAkObFEAhMMRQzIdlEZQbKEntma2LQWF5wdmlpDubam55Fg3B+8CB98K+7VvIEGGZg5Glqvx5f0Iq7PB/8yLGIbZ2mv3+TFq+1zhtE8Nrzr0joFTngSo3xQMf+ie24i0og5HMm3rLtzS+XBRkvERDzRGQ6Mm2p33R4CsLVlt2DEO/wldUphPi';const _IH='291baf9edfc3b88a1b5e9a13a957ff975225c11a0ca9fc99378b8bf51c1d17e2';let _src;

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
