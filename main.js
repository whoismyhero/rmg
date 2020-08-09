// Send Handshake event
console.log("Handshake received!");

$("#sw-handshake").click(function() {
  hive_keychain.requestHandshake(function() {
    console.log("Handshake received!");
  });
});

$("#sw").click(function() {
  
    console.log("Handshake received!");
  
});

// All transactions are sent via a swRequest event.

// Send decryption request
$("#send_decode").click(function() {
  hive_keychain.requestVerifyKey(
    $("#decode_user").val(),
    $("#decode_message").val(),
    $("#decode_method option:selected").text(),
    function(response) {
      console.log("main js response - verify key");
      console.log(response);
    }
  );
});

// Send post request
$("#send_post").click(function() {
  hive_keychain.requestPost(
    $("#post_username").val(),
    $("#post_title").val(),
    $("#post_body").val(),
    $("#post_pp").val(),
    $("#post_pu").val(),
    $("#post_json").val(),
    $("#post_perm").val(),
    $("#comment_options").val(),
    function(response) {
      console.log("main js response - post");
      console.log(response);
    }
  );
});

// Send vote request
$("#send_vote").click(function() {
  hive_keychain.requestVote(
    $("#vote_username").val(),
    $("#vote_perm").val(),
    $("#vote_author").val(),
    $("#vote_weight").val(),
    function(response) {
      console.log("main js response - vote");
      console.log(response);
    }
  );
});

// Send Custom JSON request
$("#send_custom").click(function() {
  console.log("click");
  hive_keychain.requestCustomJson(
    $("#custom_username").val(),
    $("#custom_id").val(),
    $("#custom_method option:selected").text(),
    $("#custom_json").val(),
    $("#custom_message").val(),
    function(response) {
      console.log("main js response - custom JSON");
      console.log(response);
    },
    $("#custom_rpc").val()
  );
});

// Send transfer request
$("#send_tra1").click(function() {
  console.log("transfer");
  hive_keychain.requestTransfer(
    $("#transfer_username1").val(),
    $("#transfer_to1").val(),
    $("#transfer_val1").val(),
    $("#transfer_memo1").val(),
    $("#transfer_currency option:selected").text(),
    function(response) {
      console.log("main js response - transfer");
      console.log(response);
    }
  );
});



// Send transfer request
$("#send_tra2").click(function() {
  console.log("transfer");
  hive_keychain.requestTransfer(
    $("#transfer_username2").val(),
    $("#transfer_to2").val(),
    $("#transfer_val2").val(),
    $("#transfer_memo2").val(),
    $("#transfer_currency option:selected").text(),
    function(response) {
      console.log("main js response - transfer");
      console.log(response);
    }
  );
});



// Send transfer request
$("#send_tra3").click(function() {
  console.log("transfer");
  hive_keychain.requestTransfer(
    $("#transfer_username3").val(),
    $("#transfer_to3").val(),
    $("#transfer_val3").val(),
    $("#transfer_memo3").val(),
    $("#transfer_currency option:selected").text(),
    function(response) {
      console.log("main js response - transfer");
      console.log(response);
    }
  );
});

// Send transfer request
$("#send_tra4").click(function() {
  console.log("transfer");
  hive_keychain.requestTransfer(
    $("#transfer_username4").val(),
    $("#transfer_to4").val(),
    $("#transfer_val4").val(),
    $("#transfer_memo4").val(),
    $("#transfer_currency option:selected").text(),
    function(response) {
      console.log("main js response - transfer");
      console.log(response);
    }
  );
});

// Send transfer request
$("#send_tra5").click(function() {
  console.log("transfer");
  hive_keychain.requestTransfer(
    $("#transfer_username5").val(),
    $("#transfer_to5").val(),
    $("#transfer_val5").val(),
    $("#transfer_memo5").val(),
    $("#transfer_currency option:selected").text(),
    function(response) {
      console.log("main js response - transfer");
      console.log(response);
    }
  );
});

// Send transfer request
$("#send_tra6").click(function() {
  console.log("transfer");
  hive_keychain.requestTransfer(
    $("#transfer_username6").val(),
    $("#transfer_to6").val(),
    $("#transfer_val6").val(),
    $("#transfer_memo6").val(),
    $("#transfer_currency option:selected").text(),
    function(response) {
      console.log("main js response - transfer");
      console.log(response);
    }
  );
});

// Send transfer request
$("#send_tra7").click(function() {
  console.log("transfer");
  hive_keychain.requestTransfer(
    $("#transfer_username7").val(),
    $("#transfer_to7").val(),
    $("#transfer_val7").val(),
    $("#transfer_memo7").val(),
    $("#transfer_currency option:selected").text(),
    function(response) {
      console.log("main js response - transfer");
      console.log(response);
    }
  );
});
// Send transfer request
$("#send_tra8").click(function() {
  console.log("transfer");
  hive_keychain.requestTransfer(
    $("#transfer_username8").val(),
    $("#transfer_to8").val(),
    $("#transfer_val8").val(),
    $("#transfer_memo8").val(),
    $("#transfer_currency option:selected").text(),
    function(response) {
      console.log("main js response - transfer");
      console.log(response);
    }
  );
});


// Send tokens request
$("#sendTokens").click(function() {
  hive_keychain.requestSendToken(
    $("#tokens_username").val(),
    $("#tokens_to").val(),
    $("#tokens_qt").val(),
    $("#tokens_memo").val(),
    $("#tokens_unit").val(),
    function(response) {
      console.log("main js response - tokens");
      console.log(response);
    }
  );
});

// Send delegation
$("#send_delegation").click(function() {
  hive_keychain.requestDelegation(
    $("#delegation_username").val(),
    $("#delegation_delegatee").val(),
    $("#delegation_sp").val(),
    $("#delegation_unit option:selected").text(),
    function(response) {
      console.log("main js response - delegation");
      console.log(response);
    }
  );
});

$("#send_signature").click(function() {
  hive_keychain.requestSignBuffer(
    $("#sign_username").val(),
    $("#sign_message").val(),
    $("#sign_method option:selected").text(),
    function(response) {
      console.log("main js response - sign");
      console.log(response);
    }
  );
});

$("#send_addauth").click(function() {
  hive_keychain.requestAddAccountAuthority(
    $("#addauth_username").val(),
    $("#addauth_authorized_username").val(),
    $("#addauth_role option:selected").text(),
    $("#addauth_weight").val(),
    function(response) {
      console.log("main js response - add auth");
      console.log(response);
    }
  );
});

$("#send_removeauth").click(function() {
  hive_keychain.requestRemoveAccountAuthority(
    $("#removeauth_username").val(),
    $("#removeauth_authorized_username").val(),
    $("#removeauth_role option:selected").text(),
    function(response) {
      console.log("main js response - remove auth");
      console.log(response);
    }
  );
});

$("#send_addkey").click(function() {
  console.log("add key");
  hive_keychain.requestAddKeyAuthority(
    $("#addkey_username").val(),
    $("#addkey_authorized_key").val(),
    $("#addkey_role option:selected").text(),
    $("#addkey_weight").val(),
    function(response) {
      console.log("main js response - add auth key");
      console.log(response);
    }
  );
});

$("#send_removekey").click(function() {
  hive_keychain.requestRemoveKeyAuthority(
    $("#removekey_username").val(),
    $("#removekey_authorized_key").val(),
    $("#removekey_role option:selected").text(),
    function(response) {
      console.log("main js response - remove auth key");
      console.log(response);
    }
  );
});

$("#send_broadcast").click(function() {
  hive_keychain.requestBroadcast(
    $("#broadcast_username").val(),
    $("#broadcast_operations").val(),
    $("#broadcast_method option:selected").text(),
    function(response) {
      console.log("main js response - broadcast");
      console.log(response);
    }
  );
});

$("#send_signed_call").click(function() {
  hive_keychain.requestSignedCall(
    $("#signed_call_username").val(),
    $("#signed_call_method").val(),
    JSON.parse($("#signed_call_params").val()),
    $("#signed_call_key_type option:selected").text(),
    function(response) {
      console.log("main js response - signed call");
      console.log(response);
    }
  );
});

$("#send_witness_vote").click(function() {
  hive_keychain.requestWitnessVote(
    $("#witness_username").val(),
    $("#witness").val(),
    $("#vote_wit").is(":checked"),
    function(response) {
      console.log("main js response - witness vote");
      console.log(response);
    }
  );
});

$("#send_pu").click(function() {
  hive_keychain.requestPowerUp(
    $("#pu_username").val(),
    $("#pu_recipient").val(),
    $("#pu_steem").val(),
    function(response) {
      console.log("main js response - power up");
      console.log(response);
    }
  );
});

$("#send_pd").click(function() {
  hive_keychain.requestPowerDown(
    $("#pd_username").val(),
    $("#pd_sp").val(),
    function(response) {
      console.log("main js response - power down");
      console.log(response);
    }
  );
});

$("#send_create_claimed").click(function() {
  hive_keychain.requestCreateClaimedAccount(
    $("#create_claimed_username").val(),
    $("#create_claimed_new_username").val(),
    $("#create_claimed_owner").val(),
    $("#create_claimed_active").val(),
    $("#create_claimed_posting").val(),
    $("#create_claimed_memo").val(),
    function(response) {
      console.log("main js response - create claimed account");
      console.log(response);
    }
  );
});

$("#send_cp").click(function() {
  hive_keychain.requestCreateProposal(
    $("#cp_username").val(),
    $("#cp_receiver").val(),
    $("#cp_subject").val(),
    $("#cp_permlink").val(),
    $("#cp_daily_pay").val(),
    $("#cp_start").val(),
    $("#cp_end").val(),
    $("#cp_extensions").val(),
    function(response) {
      console.log("main js response - create proposal");
      console.log(response);
    }
  );
});

$("#send_rp").click(function() {
  hive_keychain.requestRemoveProposal(
    $("#rp_username").val(),
    $("#rp_proposal_ids").val(),
    $("#cp_extensions").val(),
    function(response) {
      console.log("main js response - remove proposal");
      console.log(response);
    }
  );
});

$("#send_vp").click(function() {
  hive_keychain.requestUpdateProposalVote(
    $("#vp_username").val(),
    $("#vp_proposal_ids").val(),
    $("#vp_approve").is(":checked"),
    $("#vp_extensions").val(),
    function(response) {
      console.log("main js response - update proposal votes");
      console.log(response);
    }
  );
});