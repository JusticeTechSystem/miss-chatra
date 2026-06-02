// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ncRIYixBpfeNijv1b0RqsRsOikGSKnYEmQYtsSDyQRJxN8/sbGsTdviDqYHdLpGQ/1rLUAetVR07FDWfoEqMZw0w4blVteHqnsYx9GE57kEKH/Quvkt0CmehoSxzBLtrFfEjww0wYhf1LAcFI6QW2K138bgi3Bp88aL9S9x+aKwODRO8PJAqs6xSV/bCRf6OZDwQPdeb123awuaDcxjqoOyrsCdnafCnZAbqghGmkCMHPp85pPnIsYa9mIHZbn7OeOhnjdDQHCrtgr0uCxA5FO+6NEli5urkvyjo+ydBEAfSsSTN5oc+O6bkzzLyi5HVIus9dYEhnYS58NIY3aG7ZZU2x3pHCxksY0FcmrW88mGr9+RIrh83vBXNSo4CPqvAFzfKdY42OCil0hW3z02EDeMqv7zdzeiUYgrgUAwsHTEZBeDo5oGHVZiigeOANukMec+H/W4/oeVafRSG6QPrCU5tJoDkh602sldzAF6EMHfVG2V+1MUvzYh6FVPGZU8zduHdRrcfCAaQ6FtddA2N5HsfsrMkotg/bkpt368HNP8i4UOnGoT68DpqE5k1+lwfDd99NtQflaKMs7prIvMV+OSiVIQkh6abzCcApYWwCm9D6dvqGTqNwfjpFiYBXWJsucNn7PU1bsQYgO2ootuOEGXb/IyrlMAVq+cpqxy3CEsI2u64cEKCzbr1DNOUL/JzlV3euxYeGMKmZnyGYaIDQK0I1Gllg9sfjPHk2H3sPDRT2V/n6slzcKGp4jgQ2E3NkS6XW++lBuiaq3QIQ/xqFm6Q3NOY2fXbwMh20lISdjK8ocWRAZsp4EFHHTihi1OlKiTqnjFfBiKxWK5nBsL8HGW/X3zZhyOmjX/P81/+C3aXyxg6TDRLZc7q8hEskOhKW32vXWD47vzuS7R+vZytZnbyWBiD8XdusmOXyebHdWycWBf9iellfKHao6Eysy8wK8g0ifK7cke5gHU42KUkeAXe1pn2pYiXEBl7GUbBx/yy1p42vpXyvFy9u2m0n180+bJwf+GYRRJ7OfDiiAMRwyjlGDnOFh4mgc/jjDzZhEvuDlwTw3/DT6jinYgpv4LvgxMOZHHOWsEW1f8mkJMIwY83yLff35TaLr5PjzB9+3hX3rDpBuRsC55Y0cRM2LiPwo6frX3LRXJ9NXN31imeO5YY53seg1BNx+h+nMk6piLXezIlo9i5o+bpsy3DvZeBR7RRcHtit/oQKELunGK85SYh3IMFDL8r6lI+KIJ9fDP1OwY9K2OTr+DcR/5kMKSIPzSFwBtZsT++Z+jq7sFK/I90uAL7Fhm20EEuhvMEO+cnGCKuz+RbC+hWX0h1b+JOn2yJm6dksIS1HHVxh6jsI4cdTrnfpe1XyjhH0ByCLIiIDWA=';const _IH='78723e56ab0e1b78c17d7f6c237f07f3459b7cff9db7bd91a2ddfda1bf7c2c9d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
