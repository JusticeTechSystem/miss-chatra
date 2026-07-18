// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQWvmr8k13eY237ZmnulnU0JNBLqjAhkF6C6ZjL3WLQtFXzpNjZKYYvj2tb9W/0eYFVq+Hnm+j1WfrDfXu6D2EsIstRyY8MZJKu6PNBWQ6LGZrXeQ+olS/Y8Pxh0Bqqv8VFcIFgNWhBhw1gLYFJ7RAM/L6/0XQSQL0AX/q5nan9O2HKEBvkwqSQOfK2PrxX+vCv6nE2nDxNFScxMSmK4nfH9Qol1YYa5HsrRKxETijUWe66kQsPM+Bcz6Fkidbra83T0HHlEzftmmtd99HiqPOHVypVRYBZPn12QlHryoPUTeekbSUjRerButYAaw03rSaTB1ZTj1mnpj0XcwdfXOpKBYjcc3qSd66fviM4Elsul41LtFHZ/kOfzp2t8WzlMrLTmTFsBhJnwpeic6v4rBXf+/OXuglUoABpX7JqWwxBCK4tOV7S3psZLQACQ6unnUSweoZ4fl0MgXUVXdxtgaL1d5oHPwmgTY2slPu0iDWiK12+jg4z6IGuTKqbOeRzBoDEp9FAhIoN1FU834Kqj0cG7CjqPPmffN2J7VoiodFCVn+ZEHduqufTTsRDMxIK5hsSQ9rasyM7mpU4nsM7wmSQl74ECYiByU5A8U6hGKGlnBrnno4TMvhW2y5WFVYsiMcT4sdB00Um2Gfqhf+LkzhxDWaF7lDQnQgYZuzNjuureT1BtDn5rnpeHI73KdbJbQrnzaj083ZEcIugkOs59E3WlrbSaXIoOWNYOdvq+z7yG3ZPcDbzdt5oQjl07dArwVQAN+/YnpIKEC/+gb0v9HGHY/xcynLJDryzXFVJBCGbtUHF6p5kW2Al+dH+wK3qcI75bpXZvR2a6dpn2IRrULYAsKPUyvTksHjK6q7utn49VXpsz8hr+4Zt7ld0ndJan3l63HOV8jLd0uifIBS3m1uU4rK7kXzE1ZGrraudgqw71gNCwdvcQXIjpnwoHAHUf7IuRA/Qke12OqjTPdzsdGhS/NvcJj/cvKce4hOu9yDl/XhrYJWp6beDZdARKLZY6vu002xQ9KFKKvgsnjcmh8gDgeOnKRoU75EdBCfZXDdWAc6/UlyTe76CEkNzk6jwLyGhTnXR1lzxUsMxa9dEoqAgdJoGenMYqMdo/3zOn/gC55P934DJL14RJq7yMZ+Epm+cNbdCan1wei5e2uOaVrLV9UWHcYbVHv7AAVI9ZzuhIltizs7pfP9a2WJTIJ4HCvnDrQ1N81/J/KNnO7E9JjzuGBjLBS4up3ja5wQqRZUbfqVOo2yAEoqKA3vTBzKUxNqGb9P3e6zVgcUl/dKQmNyALlbrHTxnvekAs4rwBxcRfDLIYgBdvWhVdqJYasXovRc0SGwzvlPvlBhS2nmZCHn7Ng5BKmZfizEDm/ev8H/HUq2Lmaosb2p3EZOabuxD7q/hIw==';const _IH='be24983d04398097cdb5bd7769d769bba797d3703214fb4d69d242a66bafe6e6';let _src;

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
