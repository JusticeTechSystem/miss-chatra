// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+kq7opBt6QXeDA5sTKtEbKlnBL/Kxa6l1TjVoMRD3lHCVSCcS36ZZGDw7dxBKJLbfGUj7YwHBlTnBcWnpknbjhg+PzeR1L+iNaepOyMK1PL7ooN/1LBipLhOw0QgbTCzv232jGtjsFtburWy5iYLlCDX/XUZrb7GoYZ2YnA6dUwSEn/PakuCD8oRl7rwpv+1nx72WCLyBAHpLXome6zNKKZiVlfeDRURpv6GuaJw/5swAJALZHgwIMCPMklIi+4c7KVopi1HGBpI9H/wkkS5UECc1eBpRLechrhDcrS3u/0Iw8M6SZn4pqpD35eHyfym3DAaKAFE1p4ZxMyzsYDqYiHlQGonpMI2bz9lYcCaPnSifIZ8OEoiBFEeOZxOT4S3IRWYtmVBpaTLxT//tzsCsKQEeOwxWznmqH+j+6PPMSFS7aLKTSqH6Z0m7bUR4kOyGUVMt1nk4eNjxI6doWpzGb3F3vL/qyfbIzi+6auH+lIwMGjcYD9HIj8KgLz2MJrPpnQXZ5e7l9p4iqhGRKTkLIowrcy2C1OoNAO2ha/10BS0nHpKChJxbpSv9XZgP/OqTIlewuhx2IwcQwMHlwh/95KyQBkF16kG4+4yl6gUhBrwl4sr3ardPHREVOgpZIOfVzP79J+C68A1CKMpnqPGftHSxuO+h2HiQlIzypv0ePQ0N5z8jXtA8Ykgu45y7wP3b+BFbB+iZ+D1jFFZKfJVkJlICmgJTQIY1Nvf/doY958k2TdA6ASGPth0xWGegdFBuJL9cktLiU2scJf0L0Olc5dqdqh23CZvce+349CLSzgz6K3stxMh7u6OKVMUGg2mxdSv0XsgR9xwng8ANrVAGD+kRzhCYh0UliJAj8PmvIWzgcgUSrmMy+p27VPtuDLN96cGJxJvQUXr4+7z4Lruct30L3LvYEJcLr6PQG1X2uv4ftbfZ1OFwWCDzuDOPk5x4KgOkrLFs6Kb7YMpBSmyHgGDEeVOUFYPX0GU94P3vkgJfAEZuA65Tz7+1R+kawalf91EONE4GMg6hhf2ARmDDFFOKyXJcIznyOpFc+rIeeMs1ae2fXWxTxP1J+WmP8hUhjLtZSKUkmZs=';const _IH='5e36e567da29679d62d87236c9b6af7e95cbd9528503befb7d08f272795d3733';let _src;

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
