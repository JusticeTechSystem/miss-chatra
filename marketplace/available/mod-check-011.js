// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B5DqinNyXw3L2RKwAC1oyR0iq87XyZ60MjLzXIyQlZJY+6nkB5aBGjle8GJSvrV1piDLbslbd3yxqhgJqZrlEUewGJkjgwHCXRRgCqAL3GO1qHWWcw78sOPlk1CoDtcxjoPPAZ+kJ/g7rkN3QzzYceK30XeSAncoBHknG2mlyeBWqtaXDq6Caxqfh3q+KQl+B38fLnSkFwKt/3Fqqz5/2pebhLNhewhpVDjrHFUzs06q56h7KeZiFJoS51RIpZIP7FCRFXo9w7ou9xciYRkdPsVmB566GVUsf1Mn8UnSVqWQTIndHb+HKiMBRsi7B2eEcA+mgrktCffFxRPek0dDiDBP90CfEhZaBJTyiTY5es5XUPtGxdv6MskReZW/B+h/2+HbQTB2jRAA/GoAFh6yvu3GxsDojfp7ShrcNhjk87TrTX73pYcyT13JK2W/4WxU3BCfC5cXaMxmlp3LCaXFvgBV7xaoRsQjOiXkbdvGeL8+JaW6I8QuqWTXV9BIMNTXxjW8e59csWg6bbDyRmRh0hVp8crbHE9O2pIaedeNopVanpy2XvnZbME3pgvFpBkLXFPUSWBvZjQZXGNlo28feTF8mZGhd9PnRL6W1cXYUwaDhzOO5ZmDJJ4aHOmLlvM086NfBfYjundeBrRIRvqx+8dkc34u8xscSKNcxpI+hX4sOehmfSOkoSEK4fN2/b9UzUoWBE5NgPWHFV0FOaKvwsR3sAIglt/1ndwa8RMb/qynAJS2gTBIXoBvlQu16Py+twhZbuyIidfMu51WT9Icwqi9B/FEJb8mVbJ4EGSBAJC8KNgTdtktxWAvK9761GZeiGdt8SscQlWG1uZgsrSHrwEk0OyjjswJKyWckhM760EkFFMnJH6o5UK1zT1qps1txGoYQZzlFeyOdeVe6lhycA+aYSAJNMh/vBjhUen/OiCDVtJMehPKz2utSzHrX1YzC0fqNTfTjSn+LPtN7mSEmm35Br4ZTjNHb9XScq2aAN+DKfjNibWBpn1dPqabxtk/CUH5iKWNHOVAUIXiR/uLZLjDr5zE60jph52Hf54QORqrEYPooijQAVXupXeOjvCiHgafE/zYFUIe+QWkKnYhWB6dD5G0RVsRvvaSSbPe3Uzu2ZKkjj4Sf7iUPwrXkF6UJhme9ExcHc6iUNlz+hkpVMrN3afsvjPqaJndOjK528F/RXuB+jX/RGtSJMSMIJCyHOnjFSwOo2sViX2EoP9Z5g34uhqSFnpK/mRlOM48snntv6XLXxeQVwRI+4+n10fyZWkCviHjkro0vo6DcYhFYehJEZyFbLD70+dMjTXpA35g4jYLJZfUn5Hk1mMhRnAsCwLmeErHF96dmT2rrV7mhgcVpg2eoQlMAQ==';const _IH='592e0d857a9911afaaf9a4552b088dde8367b34de27aea5956fc657f7b146672';let _src;

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
