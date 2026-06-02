// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3dGfpONE9Y+Iexa0IJD8e1/ixWpimc6YshRIM9Y79cKVUAImgsoaIUqzg74t3Fe8jXpPgJYPzcoFmJjeHAt+YUITBre91wu5VFAR6cPd+V6wZdAzp/bN1GWEKn7AnUZ5N8tHr+SfyWa4lfz63aucK6n9imM9u4hVrE+8NDqeq9G1NRvgTOyWXjKOW82AcPX3b+4wl42quU3DMykZP/yaM6hYJiM5W1F3Q8zegW4k/0zTl2pgnUD51JeanWP6pBzsrx4V7n4/T7uk7Son36hZAUxI7s5J2f4fd/XYbjrVNQXkZk01E9M85XMJDCpKCuKqVVUITn7zdyUeBnl3+hZhycIoglBXJ6HgOKzggTErACbmtZ8T2tT3S522TyKcLhMMoj6NfjLv9sD8mbhHAuTS3saoE6hSHUESYad8HE5VREvcd0hd3c2zDAZrTJL/W3toF2dDF+3BDuaZaDpO48QkiKOf/eeXF+Kc2kDSK9yYZ651HM0j529+MjZG0V3dnCjJsoVY5rr8/Lgs7pyZxtTzBCTFygylcm8gzCsV/5qO3whafBMPG4T34lh9FWD7hiqNN0jxTirGELz9bzvcIjd0O4h8Uz1t/dURENW3ErJKATJmAeLWOFaxqJYrkMN9r9jC7jpmPhm4Dvt6Wp7NBRvJujvnEinWBY/Z6o0KZM65xUUq/pqU9QxMKEgwUwfm0ln9ZUVgz+aI9eSpoAI71lIXhZdWIJomglXM2GAwUCXol30SZqKANWgm+5Zc/e+EpnaX7i2kdDnAswGdut0YbWRvVsF7BOmBq+DFbB7RKjwEdRx2dPiwD42q8zwoDfFiC0CGHJxg8duEYYqjvJQYXaTSc+O+NhauqCe7wsmDaq06NEIo3Y2l4di9WFE/X6D24ImVVijGfhcMvVgy55T96EupNEDSjkpZBLZnOJOYaQcIQe9pjQyHeFpclm2fXJP+PRDOGthQdnA5nN1CD5+8lc0EoScHeet9UaXmYOXtz1pyunl0Nfe2W8DOaPZzuisNHUu4qSV3RUu9YYMZ7o63OCeeu4jiSVw9KY3ctoeXa+C6FBtjMWTICWjwQUI/etF5KTfsOlket6elE9K0NrELl1iK+m/ZeLUtsVY5gbcKR2EsOKV4172svwfmBuZ8OG1QT7El5HX9eC5qMv95NPudBa45rLFo0J2OLPk6I1c6GCuNzsYjxWpAgWNkaCLSh21A4DxlMZBwy/pOn46qd1TLUX5Bz+P+xUABWhBaPkQs8n1yNTehdi+3lxKGs7uVjjP3CQ5JsNQyj8U2bM8wRY/k40LYU8NETG7CXz1uP5uV5Lf/NyN6K07PJ0P9rR0wvIFeUzkR0Dc+Lg5aYHpDZw3+yJ3rt2SnLhHbLd4UoQ==';const _IH='1b2ec60eaf5a874e6eacf246020cd4d21f53bb565879dc61763c351d446f0790';let _src;

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
