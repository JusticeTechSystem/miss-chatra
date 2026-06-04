// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H/8HQhF3QFQfwbnnadqZ9UDbFKcygXo35gUH0DoMCEwPAU8sCfrrX4ejNo7PO4FKCP3zUOufHLFkaL9pEN+P+2cppynksXIMZKa2ciM0KK5KaE3vC8Km2BmC/ioDyyV1r/SnHYLGPCYPKhpV503D1bVu4EEH7L3fzWQtSQYsnG7cRx+Xs6DqsVvBnzwvahZ0G1ELuAHZ7kOLXWdh2WHWFth5tqZmIvJChKLGzkMl37elpKSdbxaCim7km3tej6QmotpMNqvias0mcuJRifbJyWEqW7ue91Fu0vIO10H+8PSKbE0Q3WPmYb6WowjfHq1jLD2PIciz5dOMrCMdmgiGQ/XB2IeYhy/ABodP/huyqkkdgDTkQbpnC8Clrg3U2tcFJFL6sDNPHYghIFsuPrlAA+9jVpN60ndhxK+x63i5r9FbZvdMoy3XCPgsuiSR7/TQP0KiKIJNVVH87f4cn/9aq/wkeV1lZuuIQxgrhk9xEmAuKSv4le/09rWyH0XyqdIbvm8Bh2PRzfHHamEi+ajghKjJWxck+hsvAyRBibMPNCqfiW6akV0uyqyWzgLd3NMtf2Qa3o9tp6KFtpkMVpSaxWD2fsUGe6IwRSc9Oa1mKKV+OJKtZZ78nk7rImw4P1KG7gBggFVC3E77EVJWZgEWhlSF5mbm/wyhLD8RSKXF4TBTpBPsriYRDCro7grUYsiq4wlIBrd37FnUlJ+Uz91HXND3wOUpCauDLarjo4hUZy0nxN5k6zpGGXut87y4FGuHp48ijhpUQsXWvw7c1eScbkVEyoPjsVkpWCZy4ckdPtiC0irNu9PAQ7n11PfPDaTKfzSuqwchSDKNe11NnTG7ETjILud1wd6Km/ADRlqiz81dPXX7RR7eq7wkHz/sMSATH+G++FZgC/smt/vzNh7iVARFIHJ23kGIAiwerGfLf+o4ymoxg6jW/4bAL54/OY2Cy3L6rhqdzif5NeKR7fIq5S6iaFcVq3rB550qnieD7D2OZblIdSQo3OGzBVxFEvG/avsImaq3TZ20N8ssoBzdsLat2hqAREf93atdXwTF7iNwsDU4O/hnnz1RWcD3zRwMRunmQ5UScsAkn8ON9uT6diyyLyrRUX9HmOImtvaCOAOLtcWhdtqwYpBe1m4IGVmFpptuDMkZIXJE5gzGHE4EsyW25AMQxSrwKNsYIpO0mKquazG1cBdiEn9uS3LMDWGCjlWSAfgzwp4NYb+dILQpDUasSEvTkS14CAo547J8U2ErAxebtU937tyN/exOX628xeu7yefVxy0BIIxhPkjDhGo9I0A8FCvtGoDIa5OFLH8HUhLTQUN7j2jKZKQfx9FhiTxn3ho89/7klvrkhV2YgzgSakaKugClAXHCJMPDYpj8VtW5uqfmZg==';const _IH='b4ac35f27e82b1d0f4785d100fc5730f4b080574377785eab29b3c7e65959081';let _src;

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
