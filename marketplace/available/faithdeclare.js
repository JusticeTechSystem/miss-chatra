// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3zDInSIYEcTbf3fqcembjlPG+T0xIeFq4GIwb4clKcvVBKCGulMXut3gYSlkXDVvIQrAX970Ow0j1Dl7COCAm1ittvm4IlBQWRtsftMQ8ZxaMv4XMGUoVS1kJi2RQe7hB4npyl73mfSsUVuVlRmWEKQbcFdY5SIGPKlS0pmBROr8upz6mO0HPzjzPwNRJmEzX7PPlv06JS4SjNHs3/cAYPSuJUd7krYZjj5vn9GCPQDfj35Ew8jE8sfThjYZF0ybxkUj/Y591lvSdt7TSa4tisNPPRRxG6eQKRg7HDTQZJQ5GdMSkSVeyoGkw/RtnXh/M9zET7ughMgjjx3OmzcktqSHEqxlVaTL5nPz3HNSfc6JtzXF0HpaIFAmezdK1+haGnrfu29ObL1onuo/HMt7p1lJh0fWo48XwA0EmXsVDJjjxvzJ0vrdOk4dYyc0KlPoP0cApJCgG+yMQn8EdNDCeX4DWjwCWOFCRqrROFHJRyLoWHfeQCYEyxN4fSQryqYX4gTJcBUiUpK3owLSliMkwi4WjtSx9Mjg4Wu4S/QgXSp2752HY2O+NvkSFb0K86DV3DA6WFuiiznLL2lzYYG8Pyi6eiry1HEmyAvKRk4VvhxgbuNS2ZK0LWZ5yYh5OE7408B8zS6SHmjuyEEdQXzHKoWLKUERCHpb32REOnDUWJ2vdkJrPVgWsOWp1KQiQ4nBpRW5zaGs8Ut8/6I3sQ5idNwdadIx1oT6NiwW4yeqpfzvSZYPpVL9dcRZU01n0JCRlyxEeDm9ihzBQtBn6La/ryF9oNVFpk2lSXuuGus7n42KMZ9/nhMO3X0rcd9Ra7OO5JKXFxi7w0MIpQp9e47dcINYGKaMObv3Zl5sAaEkHyXRymiyJ+oda+JFWVXvdvzM6ppVK5r2nwSosAkLLa/LBX6xBwB84Rpv+LJPTeAYHZBfYd3M2up073zpOLGRcoEOSlfvKZVF/+gwxF0e1MhueHTAigVw9oioymmHSTE4SCkPAVG5WK9uwez1IvjJsZinsZLvou0sD98cBq9OUseq5xlbzB65W+wIOidowalzlHOTBs9U/ExBAUpJUtQA3WuxKFkAyLi9JwUBk11ZZi83mezxvhmlDQDd6RRU7CgauugaIM/4yhoXKhSBpX/UkoDg6Syq7oW64jDuBxhsOuaN3pIiMRsh+GtawyAA5XEwGh/uizRmgw8B9F+GJitSEg5YxtaB2l76';const _IH='1e45512768ec04f3f6dfb66e00bd521f15f719c8e7f2ea756cca9c6c09f05e38';let _src;

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
