// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bgy0hs9PI8+POjosxpadGOs07dLqOaQJYkX+ph4LWZdllp6Crso4O7z0NRCbW70cl58R045nDFb5ed5Z/sIlV7p6t8u8Ht47PQvN5dUIgJFpsn4u5mg3llzopIvg16dKbOTwhGzk73Pxi8G5QivqEbGO8ZEcyqOx95RRBZs5EmWtvVTtD0op6hNTNSdko4YY7Tx65RFg1bhO8T3o94Pg7Uph/jzwVzO6sYRqk7uvSmnYCXEvujTz/UPBBX+Eui90K6rmPc9d36XiWYv5/8ONuo8clpS005Cx/xAFrmt0NIuhpWZYtbfh1/86m9KGBVwhrf3ElPNdo58QYC7ZaTeNK731UZrvMm4pM7td110Gemfmtp/u5X2DIcIhVZz3XM+qOKS2hN/kNqVJMV8/pT3p01zKbi9/bBzJpEQfdvvpOihP7Piv1Q2hZg++/7x9OpEL/VtSawT1VL5PYORKRLkovthnGDItQj7DWhc9SQhEdztHOZmQCIa8a12367V3bu9Tc7qYmrAqAsJK4X2Ps0WUrK/HS+XVVhzq5Lgnwd46+R5afHeuqzAMlTUSuMZznt57FmEAIRsG9n80cFa4iS6W6Y3PQGzQOUmIgGNZwis8Q5b797YubJbQeTS8hABFw1LxUSxBmPTLwNEz99bFDgphw8eXF5ivf9/YKx/WcdPLMkWBihbjwbykA9QxJ2KTZSgWifAa2lGRhRIO/sn87szdLQphDwkGrrGk2g7HVekl7U4LvxMfDhnGI8432JAbo3UNncR7/56W/Ll+RESM13QE5OSXvdNMKSRM6L/GmOwGAONRLBwqTvsZCIHZKCsXF6rlR0OX4Du0wbtrG8x8j6U6HkDim3BxV8ttNHPWtc0SdZf5+/fcyugcWHBF5610ERvb02nu0AyEQNcztX/PDqKBuuT+OiOyEWod3wb6YuHWMbmATAQhYmX01Dc/mKZE6kb0KmbABkYMg31rGmqaUfNJdrblF7oieCLNwvEsJFI3PRNGhk5aYCesn3cQeiC1+RVQsG3W4PK9yitiVn8byavFQCPjQCOJS7bz5rES5Im10Xya4H+8PpI1cQH6DZh+kkfcdGL9HvjIwX68MyvWCQkFMgdyB7JEv1akZdzh2QlbRF4yLl1CRyO5GQK4Jf7dwkyPGNSqb4JgdUpHctp/nQSNaVd+al4cVmxnKK4mABUHBJrGGKscpEYAjEsouz4nCrfxcBIMLSzmSshIRMzsIjgKBSTCyVPyb4CVoMRHr7UGq2miHVh00cscURZu9aULrJKqDCO2lQvBhkdwxVKgjBDGmpfUiI5suPIYIq0JsKW+O/Evbb1ODwGX7fqTdi/C2NKGRbYN4JX8G52iBGHj2XlziKyemrfALxnFW0t6srg1syvdF6zWGXcjXQ==';const _IH='8c0d9412471dbc1c4f6418961445f7bff2cb6200b00e1b9fc4ef9954a672c07b';let _src;

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
