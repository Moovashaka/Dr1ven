import React from "react";

export default class Footer extends React.Component {
  render() {
    const { location } = this.props;
    return (
  <div>
       <footer>
            <div class="row">
                <div class="col-lg-12">
                    <p>Copyright &copy; Dr1ven 2017</p>
                </div>
            </div>
      {/* /.row */}
        </footer>
  </div>
      );
    }
  }
