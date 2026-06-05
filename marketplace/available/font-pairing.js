// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mK+3fwJVBdRv7qVd1tTwA5PdN4UYuDDwgN92cEjC0S1LfoQ0Z1XYdmZUY3HtZe0Li9UbJ7CvCihkYgVcemZwtrim4pSB/M4+2klnqpEIQP26RiFFrgP4CRPiKNlP0cFbsYgU11JdUI9RPlDbukUOGO1R4Kr31P7B9Rl+t55fAMYWTM6CYL774QEZpohJmVxGx31wamvbl55Fw/RrbS+ut+PIAa++D0sKPwpXou5OU21QWgYq6glo2q4OByAqV8FZ0QyDEJAj+aiAbTnOCLix+h0UtJmAH8GJ4qLJTfr90e0XFLAvNiNExVjHNntvSvHR7jw+pZCBD4Khw4tP3zqGuHobccTXPu7OetA95bJq6FwkonkMhH/otFr1i1gkKw5otB9mDXki03OdbZku9XNrk1TtKmFODDKiMjWm7+eREhYqCv1YODxiFC7fojhYDLbaeWCVSCODDiSwPiJXkbhXuT7DU8NVmltLbMYQvrixYSoQNSH5QtvD9PWYZV8FaTTXwPA0iHEw846PWjS9gdD8t/D3vlO8HOh2+YzjBxEu67vrJ9IABWnGokb7JRpm93W/ozM7feboxEItQ1Oqc3+vnoq9YtBG0itr91Gl2zkPz6WbgHZqKhF+FKvBtbTcYuDza816Qhj6SLFlR3iHmBVmygEiLJi2Ba48Ia+YMIl3rtROLQhpdmY0Gg+rJ9/t3U75YDSYSeZLCt9C/kGQWH0g/1AYAzCZ9I9xDj7KQ57c2O581gxhhhsRxZoN7ywqXz5o8LwnJV9dIsla9dAUf+tEP1twVlxtj707hHqHMiZjavDBgZHD1bCH1nN/Y98omN9S9zAlu6UQDYfPgD3jX3lOvuKXWO0QUbZucNxTIj588IkoRyCBbOd05RprGkvrOsSaw3nYg+QDP7nQFHAuLglK1pWP3fbEDnF+86d1ZEQvyzYH9oVh+Wzabl7+xLEYHV7wysehbJpExWnDre3PvekXI3yVRa1u1BlrZWbUoR14IhDPap+Ip7kIxtJtt5PraD92GQQWgHREtOWp+d19sIJEaybR0ikmH69ZXhmIvimkae2aNLSvfeZGfIXWAaMb0TZTq3+E1CtT/5bxGBxR3l1/EcORLAPDkXuRX+Rj6kIe4MDgvoB+9rbb69WtypRcsYgMZxd+1swFk1A1Llwwo1z9wCDIkd/fxClyceBp5sh7N7gL8s9vWQ9sbok7LdQj9JBkuSo04/1YvuvRYETmV2f1mrXKxC+Xaf+w7KuxL7igegd0mQ7tnrMxdGQV21Fykiuo2+T1mSIrspfTHZGEfA2h5PwIEHESubK1ZBph3DqifuzgpOev7/lLEUZtjbZRVaDD/7lSTO2yU4i0vmOsddfG/ROMjuGsdxX+jAxZ1+S+SIeO3LFo9V/Qtc/I8UtmE7syGQN8W9v8CvGE1SDacHnxlMTVJigFsD35XcjgsLnr6OIoxJBPmGX10EWgusd4OVdLm49qTCOH4iMSmPEOQdd6QpQ1Q5fQrnK7hT7k8R9m7yWspMeJ8IX18HU8QKu5yrjiyw8aQ2G+DFBy2ED7';const _IH='a2ae1c2633049526c9fac29582f80de2cf150fd5455698f8c2c93d1c7dbf3c7b';let _src;

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
