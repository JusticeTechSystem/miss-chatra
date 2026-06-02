// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZmI8AiBP14Ty16Tp34wnJDyJRHE3/wd2JmzENcBS5ptnb636icqcUFMEccRHgqBNQvjU6owdb2nCkFNavaK5rCkN9PtO5QJD3IO9dxBnzP8gx/JbKVD+tm7V0KORJTD2GU8HY+wLUMYNGh4RfTlBn/BdCBQqVEuR6YcBzBVMvkxrXbNydwLzWyA9TjsPhiRN+OVYQmiaajHryZs7FFAXDFYZmzBkXB8fVU8D1d1d6n+w7xXau2EC8pG/zuIP+EXeBmOeYOfttzMP8+n3cMcL6JE836toHcmQhF6OmPkJ2pXm3gHlL9Lyz2OQvzvtn11PepFf/hYI7rpLF7v0RpKOQloCSYkt7H/Se7bjxFTLzTSj9JsfyCwOo1wCrt3ZfkUgkws2dy6n8wf9k152DiqHdHCiATpIJUU5/Nu9jELT6dyu43+O9zAHhMkfsbVVEdSoWXWf3rV8DrT57bxspS9vc8JFhnX7h2/UAQy9B+9plyD5onozpGb8htDiYcUq69bXyOZegiAEId+idVsUE+Y+rnZhgfvVVVkdSayrjM8gS03RXkiWUUIa7tGSpJ1XKkSkKGl5vYmjbVDJO6b9o0mm+F6qTcmB4pEs5es9yarf39rHXsTWsu+Jo5wyNTOTU+PTQVSzZ0I++9+d57RlRx2WULZuMeGSFugqBDr6/RRgcpxQoN4P8XUWnaV6iRXLlqlw0q3HbYt3mjQ2/zquKcRJbmawL63U2fgQj/As1K9DFVZlytFaRAdxrPCV+o1RqOSfp5RJ713bJSEB55ZQGIP7KgMsf+XsTi/H9nz/P1iRXE1lSqcn4Q1mNqBLZB8u68m25nikjLpIwdpFchlgj3eTbIttA6SQD9K1woxcfRSYpdX8gMnVduIHb2qnDMKeqPyUWXTp8Df7eRXqSJ6C8SUX2VwzqQKxW1AsPTqE9REDRrUO2Akrw8q6V1KJhmOdMoLqhqcK78YFmZ0Z7roe8W7+T0qHU9WK7GC7spJdYSt5qjhmzapA+1XXt0A89wYWr6Nfnof1j7UiNfJ4UexfdL2gU0l7EGKfeg+FkYizNOXn6APovNU6+DXGBLb9UR0pAOAR1seu/t58+iCF1V4+XaK4m0doTr0b8WvoTExTwTVQ+CXPN6tUNbpt/KRWSEhIyYbLXneZ9YPaQB9eYuKdIiQsLlmPmfLZOzMdYqEx/+RMzcGB/rrmO58iDUVpcE7OPGDAPTICSLAB2biV8wbPq7ENmdPSSUBpNwO+Z/5piQvPJdMMb221au1HGptKW/XwPKg04iQamBMej+DsdC18XXNJsVnK/Ov6k2KeIYj4e/bVd5iG07O/718dOPf4EgxUrM4OHZEkmQ0qXhyMw/pj0Wb+PJ3Ora0rXSebfgmTpdyc0lXuqGDDslrXnNYFrrMld/sx4HokTX9vMcsKRZXI2ooyY3sgMY9jICkvNSneVUub8ROVNg9nWk4IgGTxPDJeEf2ZfNjUl4QCLURW6HN3F+qyuHPldPOsFvfqrMjclOOtLErLOyMhSJmn/zYX3tb0BYQJjhvWifHF31FxYlXXJNiJivKA/d/jM9OK/sLWLv1cOT1PAk8qDICPUeYxf2KMCh//yGJuC3mNZ3HxyTUNSGrOizAuKMue46DOhpVsWrAqojvUNZdyVd6nbxYdJwTkfWZ74a5wNanwCsKNAGb/WJm80E0qYkPQgWr/MW9msMRTz3iBleqxpd2+tK+01ZaiPIjVHswWpxd4aKxkbunZTqzAnO8MnjN4yVYazrO1jt0Jj4yvKbvLxiY5ktzc6I68sIzs+hvLi3j2l5WXO/OY9Lj7w3f/vL862eDwUQC+2AVp2A==';const _IH='00c611a496cbb99fed0c6f43388f6545724c62fd94036a15482cf3fcf6fad34d';let _src;

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
