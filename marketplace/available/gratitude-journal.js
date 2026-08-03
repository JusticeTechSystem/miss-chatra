// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQp6tl9qsfI/iiZreZONeO7zecnuIrL3PTm5z//NiZse4Ft0qPGmoU1/nX8u9DKMGMQ5GX2rbtuP7qPNYjNhM39HOdOwipeVMI2IHDXaw2KF/TZqu8sZLyM9K8hFxgBY45cQopRM+ZvyWaKMCpvkjA0TbQVSrEpNS3rcb7WvRkybBgznLl+FnE/yBY8OBLpmjxTQCI8U1pwsXcB0pAwyBQkeYdRLZe3W3roMqjWMZYrH9np91ZVXRUCpMmbLCGmBGPUE/gahAhIC0Pcj0tuiOWul5FX8dMmuzOTnvtMrBlRtJ5Yo+ZKjRbimVxzat4l9XeTKE0nhVad+ffTs8xQKHCAemEjut9fzNzmWM0+Hubeov67sztL/uPlCmjQMgFnTJEyxmmkAjFLmUvAQnAUqDtMx4mUBFscLrM9V0hLPHAT9C4XkLcuBeB1AK+t5zbE3Zt0o33bfhUefY6KEvhFpoF/bmaGH3MpHUNK4I/5Xwh5wsy2vnySM6y4y6nLHnc3MW1HQuRV05BX/bpK0DjD3vf9y7/j4iHQFUpKomu8bKEbzz4oGarQAQMB3pxZt1gXrKZ3tvCro+hqo2QTA8zZCjSAstBk8EAhor/bTtxoJqpXkpi3KZJR8lA4unJ2QrhtjN8/ekQ3ZTPwWnd7EoYxh3nfyI85xPgfbekNrb6vXcC8y16FkaIm5TY8GkXMYEiEtXfBdAGq5x9SGyP2/AAAS83oE6+qxhcfjWJWxyLfCN9ILIRqIQM7LGmJANKQGbBZUEEl5l9i294i0jQq85u9ZBEU6S9k3/oFCT5Fg2ANzGoS/LfhUiUHqLyvQr6PmFeOLpF1wfn3RRALhV2/eArGPRywk2UAz3TTCGE4EbvpDLNo1d/hPDf1qsSrhpkcUE5/saz6NUJzbmARq1pZET9OUbHiWQWuI+VsjIa6WZseMPxiu6SLBxt1/K7IYqNSlzmMR0xULE+S01rcVTMdtzecuXlTswtcM1rRUi4iY6PbFHcv0AlD2mOnGsH4+J5HWsIU84KnCLkbH10DIPhcvSb5Fqm8MqZx7NObEuhxj07a3tbzQWtijmK11fyuqGthVYjeeW5mBw9d+W2AILoQdv6K570ZiqW9oEWfaf6q5Dk+3hhNjRlFxBS2RNClz4SNEP58bcrMEocmqjMtfh779yIIbnVAvE8ltu4u/QlGU17HOvp8yv+5/NUy/Zlu6DTssTnHN+S4fZxuhGVy3BCwXLQsmeEvkrkwg9+uJSK/ukbcttsStMzSHgHmZlKpuh4GEbw2oqa9JyJEWTSL0Ww/Mh8/km0nNEV+z+QdvNr6pk7rRtI4mPuPGL37y2hndEW7iL/Tnn+pWEYpCRohoWFot1hkP6T0wNCIxGsDqJfbYZ7RnHgubXLcYRTg+cfocqzqFau5e84rYXqeIdBWcfC2+hJkGsxRN9BkaLHT1s6b/3NvXr9chELgK3zpTO8+cFkErlafdt/utcgTBQ19pPVPSYkowyyGjqQUz9bNWOwisupw/5Hl9jpqQ7PtQvfFcbY7Yoh0405HfnUPv/fDBcDXUxNmBqRZjURWZEIblM9HEkG/YrTc5dWd0A8zjp4IEfYvOnQR1kaip92fVu6pEo7lMzhLOZjIt/uNecEnOOzCLSnzOrYg6TUY8bpxIJzntGHxyaAG3gozTYrdOw+v9qdd2qEkGWnIeKfW1oZ5D+LpUX6davjeNOIkcZwmPUd6z7L18sFuhOajXFt311tCvHrxJmOSV9Nbau74x9d4aSLeib1TaYfkBpDAINl88sylnGn/pJQb2bg5SWBEfPc4XFpcYR5rU5S5Vsal';const _IH='b33c414f7987d23d140a507d4e818d5f39ae48772cfab900df99314364933c2a';let _src;

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
