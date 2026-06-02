// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ymy4Ac5Cjhy/aOL8n1NCSvRab6CGb7Qyklm2dQcCLeua93qZegKWgp+mHYSDJ3WDOWLKpvecMuz0g1gb5q7FgY3bgOreIevzQr9uEJiBuBp3lxMpKGV9YBTD+KjVIdGe79r42pYAbb+I47L2aC2XGyTb3OFle2pC/L9NIjHF3pGHZnGKKHPWL4LgkIa+S7+RdCzK7Z2/TikJB/rQ1T29Soa9AdudCR+i8LWCLhbyv1zscFgbXa1ebrZV5+ytJE7IeVk5rcBL6FNuHx4NEIQk5Jav3i4bC0fYkRJLIqznaRRodNKzky//pTVsg3Eq0BzOIZPl68RXlhV0TCHOISGS0ROvyEqRla6GvNqiDX4L495c4UNyZC8cHbkNu6bZ9x1fBEfsKzcPUY8ofx9vkgB+5kfwJQt9+393Y+fDTm433xTRMWxZ36sKzNeS58DRAHG+4HDi03bqxnaYwrYUQTK6vQSsl1WepWdCDimvZvjicAkHZFVdKgzdu+o040Iyh24fuVKYKo1qT0txUvaic2A2TuUAXUADmAqlOBne2cPpGkVDzasLOMGx03qaEgyDDRLyhintwSgWHQzrbn5/IWuRsDatxmtd3w8DSvMrOJxaY7T8qp6KCnjw5BtnJxkGfWnXay9TmanEtUHEK2LmLALX8P+mlAcQ6ZwahQppkzCoUpe+4lrx/DUzoFT0ACAL9ci21OZxOJHfkEWwWUS8WFwTz9JXcGH6kR9FPsn5T8Y1CiIfRcxVY+s6f7EPnLUccJvJOfWDjsLAKa49AWQW4NJrFJDO2Sf9dp50bVRKObKepbLgzsKQrQx1t0imsKVJL3Xw0lBf9PFp9k713Wtl1OJtaEI81MmYFuApf89vObK8QblWeGjERYTRWRvn156THVi4D1bg1IMQNR0twH3qawtyomKeBWXLZZZZ3a9navsYwccJDpxqjzORTqq2Cv7qr7kHfZGUIhS9jroJR+s72NH2fv2nUcn/NqCtUt6ZhXG2O20/JsDDnnkqmy3Lk6u62+m6lJ74+VSzoVZDYAyqJ67yrYeiuH3Eh5zNa7Go7OQPKP1rJBg/I+ZbmHev8Jb/mLjTOxk1sSJ+8M8m6zy+q/I0JjWY7OGhgQuTpVZjLmzPzq/0jXjH/7XaluoHbHHKez5796HacAdCLSD8Fwt7DmJQs+IYFmLlBcsJRV9ppLOB62PBe36+zaNhfrQYk1IYGtgznSaFgZzg4TLOV8dpV96cSeQaIEVJu1te7pugWPaoRaKbuWus5AHfOY1gsezRbhIYXEi/osju9U8b2ymtMrqsEQkOWzd6cnWYC7aSUsxbeYtvSaNrIcaT+ggFj5DnAIxd5zW3gpZjJmkUsuER1sKjzb1g1P+aBemZWVdw/BqUzQhBQCo54dI83jOOoKGbB82M1mb1bk6J8dseKQ97HrQtKCQk7ohtQGZqiVw0injoCeyxAmeXHmpEFKmVzKFg2ksAs7fcUUupCIbCRXRd8tr/ZbU5htd+QsiHRndZ1nDDNLM8n77jDH5d49aVHYQKEqPL3BvTIc0eoTQNXyk2muVNP6SRA85hitUkr73SgEbd2/QBX3yCq+QgJ4qSzXYha4RCKDoh0aqqdiA5jusnZtkKu24/K52WfVXfMl/nb+SRYW2FgNw1JGB1JxG714J41tr+pimwQ82qyFeMbUOJuJFmHIifo2O7T2bz3WCKEORA8HLdoSuNpICfQC4j';const _IH='da47d179dbc142049c731c9428d78e625eba53c5a741ff465dada01a4c946f95';let _src;

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
