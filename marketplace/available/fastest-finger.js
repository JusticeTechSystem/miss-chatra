// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f691meeQ6UIdYgX6Af/ceI6TJjKaf36UH+WPPKNnLRL+WitOZkXEHjvKV79+yfyoV02xDpWca9aeyDEoCGctd0rdsAVHxSWWapbdWfKaWxQ2kKS7cVyiripudlW/WYY0W0VxelQYAkN1YUdjaP6BkmDkmR9U4lzyJRa1PVpblMY4Nlh0mcQH+fnOwyifa3f9OsoP0nG+BRD2qRF7OlzXBSZJleY3fbbSxHSwJ9PUBru9wZfLTznLxkZMz0Or6BZ349NQYiHrDGkZC+s+6VofEjFyQ3U14tkv/f1wykrKYSeEOfyWIu0NbV5W69jE5LexqwtyoQbWntWyCbhoOpno1iCGy2hWnVT4MmyC6r3PgAGUUXh/gXqNCa8KsZTrtl5Io3dRTbVjeG48QyIpMbu+Q1o/b8nPAkH4DroabuppnWe/2YxCVjWiPgiL8uVK6lGAItTVWPan3+u497ek5D5RzjIUEPpb+721sLsQ0PPMprx9TAocX9TcSkfz1j9x9ubRM8NBYH/jSiyPSOzoQkAVNVQ4O5PfAj43XituCAROuv3zCfkIwoHgmlwnq9Md1dvYs8WjKrPHDG6tHkgLqqxZ6mUuj3we+4v/5MHUs4F7Bw7RcRyNkxzzxhCmn9UYZ666uSn+U9Tgp7r5I/PLncYMhi+pqDzenRIMfFMLueWI4hwGoDE4HKzLbQUohW1VnRdUaeOvC7omMaqoJ53CfUIlUqVZOeu5stFbY4AOVyNdfz90ezCtgW3WIcM/YJAHqUpTogNb98YveKqvTKnHDruaOkZ9elw/vspxQLjc8pjl8Iet3U9PpnyZToHy8G29AhIqxi1J7i7tCUmOgk5TaHVFfVCrjDK+jNr+bYxi4uDrYclsVGiQJy4dpzVxlOuI141YMsbzf5iPMvPB7y2R5BZodBqPcrTenUqshA4vn5nvVISztT8evLcHeQ4ZIXS4hNWNNBe3dZjUvVWI9szcCBoLgjpEL0rjwUNUc4NLn8bW39r/aJvUSfpoziBbLdYJraieqPUYetYEvEc4OGJarByk0SA5tc1KRvA8r0ke8j1RxKS1jN5WF+EaTyFIXzrbv7yOBDdK+DSmlB3nFFNtN6aicfm08p15o/ILD0R3i3qg3xBbzS4HA8VtQ09ZoXF/y177PIhpg2JTxkfLexYi97m9ibdAgJcy5j3KLy/muCHep1WryOWESj/q7EVNfGWlhUss4Xh8crn7cJm2rEc1yagBRnlAAz4OiP5F03JmqNzJnVu8dpRgAPSQoT2QvORCYEAAgmb+K+yOjYgOeRleYJrSVSYBhUWtVvVxXWjWlqQdf+eYlexe3+6VDlX7uic7LM49h8t8I0vXUZ3Mxi4IbQfbelznnpJrTy+JeL4vdA7tn39YbKRg3Nay3OaHy9/fXm0Qb7zrv7hECXZT+eThsNeBO9dl14IaWkahhiJP+xi5CJya8oJULf6n0qZYdg==';const _IH='002159a6f5991651978b43887603c811d428515088278236ce6da251e4718b30';let _src;

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
