// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k81UfVfSXc+KeNVbj779cC/PBGiR0BQ218MBpD3pB2RP21H6Evwzv1jKygMzj2BGc6FpHMsIBB9xAH0ItFupV9ErZXcOda0fQqBtmmgPmPOcV/2s1vfn5q/7sAEqx1ID8c/iEKd0q+jfXTI5YGV9uq8EsxLn00/o5D03A6inFUArP81ScrDR6ic0LbLMAW+4VJnJuZ0OunLDlwt4O51By7r0XAgiPZFLn+AjQCe9gkvlCmkpGjd2e9FRMNnkA6T/E30GDHd+8Ev067wicOisxTnyI4+TOgQr3iYqBWLfRt7Nm5nS2Cc2wxlDzAWwUdkyMH+G7zXiVUHB1aCGVsWwla+PO1DPNRzpN2b2P8HMhj6q1/HPvBHMTkIhiOXcFbDRzwCE03yveQoP1svqwXb72yoeyqQnG+82hnPr9XicP3bny8YSAu0EvmuFfhPaX+K5pkdPM7ZfmVXBvoOFjjfFWmSUG/QyWrtN0L7rU3qGIXFtnBSZW+dB8c8EK1wAW+e9sOjsYSoJQeCamrxEQcBjZXmrESfzRD/jrPomwShIjrX706uO0c2BPQAktuiz2Vqx+7sL8MbKoToZp9sPMBe1CRTalV5Lv7V4jd2bo6LEIb0MjvsdJxa36QUuCC0o2KHeUuDmwc3R2NPx8N5obljKD0ag3eGqtYQ9XH5jpROAvPb/bvm81COMtieLgzYePCDpoSbazjiXupvqA5rSz1K2b9sBE4QByuqnrItizRR6SM735fY3M+v0IN8nHAAIkFO1qj6G7XCAv85QwsdqWjFF7AFwzhEAIYr5mYQ2QJIsufZEWOLebQA6oI7IUdVxRNNpYxUzemL5fLzi8/IkKLY0FBb8l4ZKzfTijsvQebEP80XkhfoMksXfkuGbh6xWB1jltquPUF/6rpBJOC3Yuc3KiruTO5ONGQIhUQbc1ulP/Qn2lCAszPT6pIQt2VJUHk+JiAVDVgCkLZAa5NvZK8qUcTt1Qz72LUcqIPf1BEufcx77rIm9VGCK8iJggslAyQflQxoE82B/Hm6Ag1Is7ATT4I+6Vx7aMM2DZTG0MBbOVReHovXL7IOlyi6tH5V0i2GETMcPgsjMzovQwYq0CBW+llNOYyFHsrDZrZDj27ifvZ1LmNzdwU8Pw0ADX9FkjMID61H7fZQtZ71NNeLHiK8sQN1FfZoMAzHaxw2ZPN0CnKppL/qwAHwP6k9nmJFm6H0LOV4t2qsmgU+SGUPQwylvt4aQnni0JrKjN+k69g7saeAhfD9eFZfBSQ+jj2p7CGVeUj+Xkqtsa7p90tiWlrIauSxUcX7fuetB3ixd9fQVw2/R3It5Joru2kTvgb3QcMIUo1JXAtQNvrC4XzbOTfOLN1RdEvcFtvaZaA==';const _IH='f94373e9ffa1f37b191cfda04b163a1d64481ed2f68913b22f15e2e7c30a5b4b';let _src;

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
