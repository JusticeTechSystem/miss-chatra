// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9r94Z4/av4AgQRblZY4+BlX+1dibS5Cfpc7tR0IFqSOjwlcrJMj7Y/x6bmuJ/Zxz4qFzJ2q+b5/5YtjJg+YOvdAJukOqeCtbk4edqhGzHgjo7dp9Pu65tGdM2ygKr74ziLCo2yPeJ8SpErx1s0amQlAi5bLMFbjx+fu3vV2RVqREtH52AQVyC95PIiyF8qY7w8Bk6eFBZTE08URwhrKnFSLdjdFAalwjMHMu1Dtre8TD9AkkqJNa1XW7SRIj8Xz5aKv4o59phussG2OHNYJ7qamN7wlI58qwGeCHF/TueG9AXLt8fQIEk+cu7dhyXnYBCIRea+OmG8uI+3IFsGd7NI410P7yyS0sEAbnWNEHP5Mhj+LZjrHpncEorwxGeW0P6joNbiaBuJgFZDJtnwUE2nTdfwA1ROiaN0B30qmoo+y2Gx0wbVEFVv//ump/xl6QAvbqpKCDzmgJ2q18DnJzs6+uhNDb9eJSi3HvE8xWqjVbCAMHuMTGJmz5PUIjSpLTEKM6TNrqcYCAlLf+SzqLQvUY2xcvM2ppIUDzZ5EeoXjBEV5mblj8Y8UzylD4a3ts9QndP/KJJt46Dtb1C6QRlIkHs2MyMmptePDuKc92N8Mp4nth28EMF0o4jky+s+SmmyOUERk0P1U1/YCQVXzYsqH3xicSFDQQ22tneX6eWiDaLxPQHZtz6s4pEqqCI2L3wfnHR1i3MQgsSF7bEZHfk9YN2VxZZSVFdkdXPzzRwNODPbau7H11vQg+SVXX1GeTgurisoM2K5Wldel5PEFRMa6q1ZvbTkSndi4vAPiODCfCW/YlZxMZMilIzoTacufEPX0voNrwqkyABZ/Z8tTwv5tPN8lb6rhUpwZTw56joNQB2TXH17nQIZaGOMw0xBa3gnuDaq+emloO+NIczfNZ8MPPijPLs5lsAVs9JHVUD9iO5vyWTljW2R6ARdk6oABRemn3k7c1L2J0wIXtS5UbeLTpBwxhGs70iSqalEMuce6sysNmwl/KKHIbpv6CRnec0O8C8Yknr1Ah1ct+EDyNtBoNTqTXanVP+rp0MqBru+qCe9mgA/05AwLMQq0UmBkT7XLbYUDXNEP9ETQ8OIxBiGDwetzOrMi2mQJOR06egLA3rPQEIxZiWzA44JahH76uFSHRbw8AvgBy8r226+1hUBp9WWZfybYJHroQk2NYrGnVZTOjVI4QgmZ4DtlHhrx/PEczNgBSLNoUn/2JgJMMzwvFpmdIStMIDClH6qCr4d6gGf+svus8nGWfjomYPPlTjmuQoP/rKWYChiveuSm4rdbW3LDqM2XEzL2HBdffIwUY9GcO7XL1sM9OotC6nmH2rgmSC7Y14BZGbAvS/PG4Mr25ksukAdMuCnn843Oo0AvvlMMcRG+7d7Y1mQ27LAmLho0TD0o7R6xToSq/jBYXzyXUqScWIbtYUVU2KpVWH0sPxevn0HAbYnHTpIR/hcVQq1WArVnnptNFymfUJGhAZx4MI/CMZ3969B5iz97oeCTvuetO4+w5JxMlcmAJ21zaBJU/RX/fMvTkaSkEtT8Ngp80Lv1/wAiZhADp8e/+pHCkrSXbGvR/7mhYi4RrARH+K+/xq6GTpxn1Wp0O6S5B2wgT3uMGqKqj/cBJ+gL+g1nuX4YbbeCeeU83mv5TESJSkGs0vN8HUKwhRFhUGMOE1VafVN+OrUzJYWCTTZASLUmbAx0uLgj5t5fqNkH6pG8gEdVeRi9+vcBHQMXzkqLO0/iL0VdcibpPixQSP+EQo3v8VNdKYYtqjYCh9Jw5JoC';const _IH='d6cec8963c546558a0839cc1a98267ca1584f05ee0876c44dc5ef63b6bc1db52';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
