// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UZqv+UYlfyvlcw99n42Jq3tZ8ZUis2cpkXVHZ2w8+fuYv2Khbnjzb0PcW+gUVj1NEOMm3UvlhxnsyOHNbgNPHgc38bqr8fQVrarRq6+WNqGehNFniig87qrZAIvuvlabZvRXZLXMkifwIT9CSdz77Dp3tn2ttTbjzjg/+8k2NqKUZ7xWMCcG91jeqYDaP4JAZHeND/t8JcbUE2aLoTzjUi/vUDQGuI9rt/Uw9/Ol1gwgZBycXgcNt0XOLo0Y1cuEs+mjkDSzVcEVRge6F0IbSXAt09D6hJkUDf2iSheJoIp/hKWyCZOKvGPIXnYIIsbXGsTvR+CC9KoBA/O86iUs0VtKyvZqW8ozu9cSBvlnB/geLdQniJLxdi3aUsFVbJoViSO60ylKsUzHZcneYc/InBa3oOi/XTXQr47l+eQOrK5j7msQRR9tgndw8oi796lxyS/U1leMztUIm39ElEEAri62cAWHGbdHVL0DuP+kDUCDuEGeKqDbJUmZn7iTCzYoCmSpt60c+f+49kC+C663Wqe87t5dTwbxEFU9eR4gRNBL+kRgfOqX0qN7lmCyaNlkl2PvtZNg/52WHfHb4yIPjZzo5+B60gNTQnkUarqouHaL6Y0PJ5fNg3xvGojCod8k/R89/doQneypX3quNvZIVzFGeK4a9ho9eCi+noZNrDAU79CeXOzryRhTNPds0W79hFUS1JHbpXmRR0YQboE3dQGwog4dQpXKB0pvLY13yoeeCbpJk/tz890FqqoqhJKUN58IecRqvHKARduW6hOR/fwJU+PpV+vXyoivFR/KOK+59YA1pqdSdjt7dD3lkQ00gFREiC0JedU5leLq52FP72Pyc803JS8jKCs6+dIqjfzQ7w8ZY8lgusYUF+WezukZWG0N9Y5NCKtq/Z/26DQX/L24FnqjqkEqPqxnymC/dzHJAV12hneY6pFIh+6ze1DejVokynlEVew9qtatQnoBfeeKRFoY8NKikBK7AopEQLdiSvotGjMd+5X9dhY5RuTrJV3Xras4RMOktORr6bSkSFe7sgBxvOwOZQAHUn1UbYKeIbSp+Hrm0+d3jDWUFFrLzlDaKizOuiNeQsh0NpEV6RSY1+ZfDXzcKh+jlnnoZ7qvoUoR+9hev3EL54cBTZU/spk8iWzUWJTLu9KIkvo3X1eu1S0KnYJcg27dBFvn2neUpJJX6eC/8vVbyMxE4uxyGvkR5PvYSeCnAztZykkG+hHnqNrzTbDCqvlGAnrXcxr0lf+sJUJEJcsfa0+kmu5J1/+H5PyWu8zoXEUp1YyZcGBEoBAiYLTvW3RWgl6UFtAaaNaNETEtBU5VnnzUft0HgphWFCLUTnTsDrwGUhTzZV+DYEDkiIqOiRp/8iZvfmyPsgm0ZuoS0PDiotssGbtl2e5trN/oKbzrTfgj/rczLY+Cl5hMc2dXPA8Wq+SPlTUAaBpmjAxsho4QBHWlFx3UGLehvsJPaNemQy6kNlCXy9CeNjS5gk6VRf1i/5rau2aKjNNQdIqhRR0a4wCUt7yc0lCONKuPQUZxKIbEf0rs9zD+aZwAdJYef/++rjGGFeDG2Q1iBkSUeT0QZZ0k6xMf8b0UWhQqJT5xR5dBRHtWfJ23OpFcOa8Eu2MWN3CTqqiFXgZkVhcBfW9kWFmgIsP66aT4QH5XgpCzlQI046nGn6ikK5jIGk+WGUO2wy80+7bXeqKBOZD0H3Sr/rDXmh2yLy/tMJqv1t1qtCKQ5aNVEs/463tci04yEA==';const _IH='ab9dfbba8ef7a6c7a80b4ebe7d376de4da0e09f98e020a492e5eb9bda263d014';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
