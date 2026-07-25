// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRY3FvY5yOTI9BVGPB6sksoaKJv7mW+62+AMehbVVfPr2eb0Z+kG5WwpeSY8Q2GmyhoZQpoCUa4fu7MCzI8npsCsX3y9dTGo7iIfwWviXONP70tv9sUHvep8FALNmhcJSiyjm6RXjSBkZPsVwcvQ6RKgrFa6fJWFiV+YNqTXqcW0peAy5wAJJSrHo6A5kGWpQnYsDQj/393tsSG/2Gpg8oaj7aH5TIWQj3H4EV4IYcO4L0jZM0Qf5rxTelbRucvNUriXWHPshG8suUStKn0aYORZRBy+Fr6oxwT6lF5Rw4EeNcP8ILWaZs7b3dimzx40ZNAW6bd3pAHULzCO9vcLCZhCoSGQZq1rjvoW9xDQ2vm7ue5SrOFZ+BSvrszaLSrSEz7gVoEUFjFktq6cjeuFl2VT3wppCcAKH8tUwEHK3j0qqFYqPWQb7ZXXf3SlOJ9tpG5PcqQHRr9QE+l3Th+xozFLu7Q0iASf66NuyWth5hcEtHKy10C/+EKHj9V9PWYAVEGj+ulNfC3/vkxAvUgfxdyXuvnwfabEE1FqQpsrDVteuqq5R49EUTPR51WBqTOq32we2/78TMnk6MQHsRLHUY+op8eIFoMHQETM0HO/APQs3Xh0OLOoBM9OTgHvzmOxSNKJxvsJlJg2zd113Yvr7gFsM1xj5GS0HNmxs8WauHtSKu/De/ZbTj5OUyaO9AbZTyjlO2k8WWdRZiDDzOXWtjGXXd1W0msxluLWGvq4XU54yfnukkdVnxiYhX/V4/5ND0sxfZvh8XiDU+bkyW7/5Dn/j4OEf/zfeD8TfMVSzmFuZN29BEwQ057xHgShtTkdlEB31tjAkkny7IvLIyNioJnyrQqBg20dMxghxFisGIDX8z+38MQCtHuZ58+AT5UBDcLGEq/ZIW+5N7DOcdxNAv6xYtefTYwuHCXfKxQV6lost1YLPM+ldDjLigft4jypbuNrkpSkTAB97k4osQW1R0OXAJp2S5tPBGCTZ1ovk9l3B5xpcRIvpMdLg5OjUP/mJiEFMhYdHRETS7iuxSsl1h5BaL+o++j4l5yQbleusBXgm9FThK8CAa6Nyox9M4hMjLMDgBjaoUU0CqaAkEZyNTJ61HAmeiLOO0DgGTlIw/ssy4t9VCcgg07tDNKOjlboYutfM5WIY5eblkLvqKwcW237lNAPF+FY4z4IrttZbEAx7R+hoWy8i7J1e5xPX363XOnpYPhGxgYuucUyXugqWWZmgYodsmsHZKX5TvLZnOQeZ97SShlABOVnDJp+PCQQqGscI/Je7dGLNCCc/9eCsLAZCaKcaEZ55RQ6kRuymMoVKJ6kMTGpodevSu1iOqkFF6x3Ui/nJvOn5W5cYHd0e3BvFmtpA==';const _IH='3c79d67d9ee4f1dc95433f9e063ab10d2005c9d19d625216cfcd8df24da83c3b';let _src;

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
