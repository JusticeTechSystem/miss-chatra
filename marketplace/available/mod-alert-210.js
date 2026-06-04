// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o1d3UnnkhmHLNpXDCmVU6SjyskucHB8opDvLTV/zmYyIcU0U1LcjTJ1t/e4AumVDXjs4Zgkj/7edijbxqQKClByZrXez+a+tcrwF9ovUtSupUWBJRYGtDNLgICm5mUeVNpkCPFkHvzS+txEYpYhUJi8Ownjr9zpENOG6eNbrh2i9sLtdl7oEGxCOHkPbSgTuD6+V5AKvg9GdZU8ZnuXjpO2C19lSbIItAwvfs3SMiouZlh2wljYYP2yAtE5XUTxpG10ALln062ltqatv06htHV2t78Tb11NtcTDE8o7FhGYhoxMgyQB25AtOjPAZZiwEHhGaxQ2dD6ACcqPYk1Hk3FnNMwge9DWad5skLoOma7MXe0gWlZmR+VlkzdUv4xwyzFiGzXUZsypc6watNVfBs/kqjCq7nPEG0/g+nQilXNekIk26yXP0DxUuFjaXagEbnj/w4fXeYPvnTtLRJswIqM9OkQO7MCFMlVfawQVWOXxjX/Nfb8deL6DjkqxI15bxB0atRgpZ6W00ohELWRkFA+ratPMY4XlKI8RU8QXBWXuuiWv9xkn0m5dMz6UgR290u/iiU9BZbfFOC4+cQpV7EZZeLuAfyxug/DejxD378sezZr+HT5kgFzlt6DlnY7EKpTMdcnAFxyUw4J6Cx9sRmk8BTfZ4cjfCS2EX5QlkD8p/cdf8uBfiS1XmPcbVrNHciTmGkOxcKxkJ66tSPHXFXz6dHU+tWeQS5bJA8T4yE012ZFYK8xkCAZJzapBg2DDts4jn+uXy+53aDp26OU5U+ycCGoaGP+OagTICKB3U4oQXG/WWX22GpYFK94OQ6utG2uAUtHDDwtspUO7Uw4bFoK1H9wB2/RBPiWMfpS8H98X5Zjj/H21vVH0r2PngYmrZqs5VgotoPxQeXARi2JXXuXpOr83ZerQp9wz9owT2rds7d6E9YYkvThnZhH/kGHct85pZY9bKdC84qKVPQG1LwtBX5DMcfZ/A0F6apmKM3MjqZrOncb08z+2ubEoh+lJ08V9SwmPlcMpXcP1IOqiMssQOLVu5UwHpqeS0WIy3McyTNxbu9Q7ZwYxtDS5UvnGc9g/4p4LuSFXhtIIujDAHcv501W3UWqOlmuPZNnkOXCafd7TOVPLeEEeE9rplRxSuSmW8s2EMGqN158JVefxRM+tej7Fbd9N//Rx6MetodcXLIBp03ScmaYHlrArMWUfKuUjYFL1WOhvLG/OQn7uZ+lVF18T3yujfQ0qwyTTzr9/nRsDJq6wzzSk/j7Z4bIS9cCSd257ak3KOdRHlgH0faojZRi+CZ6aBsk5f4UV5TDXrEv6J18dKa5EFnARCj4YhgKsvs+kNAl9dD24EtC1baI94SQeHOAcxzRbkVc7H';const _IH='0ba49335b926855e3257e91c9a99030b13c6246f7c4a569612c3c26e2a573658';let _src;

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
